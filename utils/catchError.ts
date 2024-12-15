import { HttpError } from "@/utils/customErrors";

export async function catchError<T, E extends new (message?: string) => Error>(
  promise: Promise<T>,
  errorsToCatch?: E[],
): Promise<[undefined, T] | [InstanceType<E>]> {
  return promise
    .then((response: T) => {
      return [undefined, response] as [undefined, T];
    })
    .catch((error) => {
      if (
        error instanceof HttpError ||
        errorsToCatch?.some((e) => error instanceof e)
      ) {
        return [error];
      }
      throw error;
    });
}
