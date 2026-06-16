import { ajax, AjaxError, type AjaxResponse } from 'rxjs/ajax';
import type { Observable } from 'rxjs';

const BASE_URL = '/api';
const API_TOKEN = import.meta.env.VITE_FOOTBALL_DATA_TOKEN as string;

export const apiGet = <T>(path: string): Observable<AjaxResponse<T>> =>
  ajax<T>({
    url: `${BASE_URL}${path}`,
    headers: { 'X-Auth-Token': API_TOKEN },
  });

// Turns raw ajax/validation errors into a message that is safe to show a user.
export function getApiErrorMessage(error: unknown): string {
  if (error instanceof AjaxError) {
    if (error.status === 429) {
      return 'Too many requests — the free plan allows ~10 per minute. Please wait and try again.';
    }
    if (error.status === 403) {
      return 'This competition is not available on the free plan.';
    }
    const body = error.response as { message?: string } | null;
    if (body?.message) return body.message;
    return `Request failed with status ${error.status}.`;
  }
  if (error instanceof Error) return error.message;
  return 'Unexpected error.';
}
