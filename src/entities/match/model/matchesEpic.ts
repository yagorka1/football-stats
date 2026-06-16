import { ofType } from 'redux-observable';
import { merge, of } from 'rxjs';
import { debounceTime, map, switchMap, catchError, startWith, withLatestFrom } from 'rxjs/operators';
import { getMatches } from '../../../shared/api/matches';
import { getApiErrorMessage } from '../../../shared/api/footballData';
import type { AppEpic } from '../../../app/store/store';
import {
  fetchMatches,
  fetchMatchesRequest,
  fetchMatchesSuccess,
  fetchMatchesFailure,
  setFilters,
} from './matchesSlice';

export const matchesEpic: AppEpic = (action$, state$) =>
  merge(
    action$.pipe(ofType(fetchMatches.type)),
    action$.pipe(
      ofType(setFilters.type),
      debounceTime(400),
    ),
  ).pipe(
    withLatestFrom(state$),
    switchMap(([, state]) =>
      getMatches(state.matches.filters).pipe(
        map((res) => fetchMatchesSuccess(res.response.matches)),
        catchError((err) => of(fetchMatchesFailure(getApiErrorMessage(err)))),
        startWith(fetchMatchesRequest()),
      ),
    ),
  );
