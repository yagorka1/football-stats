import { throwError, type Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { apiGet } from './footballData';

const MAX_DATE_RANGE_DAYS = 10;

export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface Score {
  winner: string | null;
  duration: string;
  fullTime: { home: number | null; away: number | null };
  halfTime: { home: number | null; away: number | null };
}

export interface Match {
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group: string | null;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
}

export interface MatchFilters {
  dateFrom: string;
  dateTo: string;
  status: string;
  competitionId: string;
}

interface MatchesResponseFilters {
  dateFrom: string;
  dateTo: string;
  permission: string;
}

export interface MatchesResponse {
  filters: MatchesResponseFilters;
  matches: Match[];
}

export const getMatches = (filters: MatchFilters): Observable<AjaxResponse<MatchesResponse>> => {
  if (filters.dateFrom && filters.dateTo) {
    const diffDays =
      (new Date(filters.dateTo).getTime() - new Date(filters.dateFrom).getTime()) /
      (1000 * 60 * 60 * 24);
    if (diffDays > MAX_DATE_RANGE_DAYS) {
      return throwError(() => new Error('Date range cannot exceed 10 days'));
    }
  }

  const params = new URLSearchParams();
  if (filters.dateFrom && filters.dateTo) {
    params.append('dateFrom', filters.dateFrom);
    params.append('dateTo', filters.dateTo);
  }
  if (filters.status) params.append('status', filters.status);
  if (filters.competitionId) params.append('competitions', filters.competitionId);
  const query = params.toString();
  return apiGet<MatchesResponse>(`/v4/matches${query ? `?${query}` : ''}`);
};
