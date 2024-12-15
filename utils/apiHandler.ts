"use server";
import { HttpError } from '@/utils/customErrors';

const BASE_URL: string = process.env.SERVER_URL || "http://localhost:8000";

// Default headers for all requests
const defaultHeaders: Record<string, string> = {
  cache: "no-store",
};

/**
 * Utility function to make API requests
 * @param endpoint - The API endpoint to call
 * @param options - Fetch options including method, headers, body, etc.
 * @param timeout - Timeout in milliseconds (default: 10000ms)
 * @returns A promise that resolves to the response data or custom status handling
 */
const apiRequest = async <T>(
  endpoint: string,
  options: RequestInit = {},
  timeout: number = 10000,
): Promise<T> => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
    signal: controller.signal,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    console.log(response, "response");
    if (response.status === 401) {
      throw new HttpError(401, "Unauthorized", response.url);
    }
    if (response.status === 404) {
      throw new HttpError(404, "Not Found", response.url);
    }
    if (response.status === 200 || response.status === 201) {
      return (await response.json()) as T;
    }
    throw new HttpError(response.status, response.statusText, response.url);
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      console.error("Request timed out:", error);
      throw new Error("Request timed out");
    } else if (error instanceof HttpError) {
      throw error;
    } else {
      console.error("Unexpected Error:", error);
      throw new HttpError(500, "Internal Server Error", endpoint);
    }
  } finally {
    clearTimeout(id);
  }
};

/**
 * Helper functions for specific HTTP methods
 */
const apiGet = <T>(endpoint: string, options: RequestInit = {}): Promise<T> =>
  apiRequest<T>(endpoint, { method: "GET", ...options });

const apiPost = <T>(
  endpoint: string,
  body: Record<string, T> | FormData,
  options: RequestInit = {},
): Promise<T> => {
  const isFormData = body instanceof FormData;
  return apiRequest<T>(endpoint, {
    method: "POST",
    body: isFormData ? body : JSON.stringify(body),
    ...options,
    headers: {
      ...options.headers,
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    },
  });
};

const apiPut = <T>(
  endpoint: string,
  body: Record<string, T> | FormData,
  options: RequestInit = {},
): Promise<T> => {
  const isFormData = body instanceof FormData;
  return apiRequest<T>(endpoint, {
    method: "PUT",
    body: isFormData ? body : JSON.stringify(body),
    ...options,
    headers: {
      ...options.headers,
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
    },
  });
};

const apiDelete = <T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> => apiRequest<T>(endpoint, { method: "DELETE", ...options });

export { apiGet, apiPost, apiPut, apiDelete };
