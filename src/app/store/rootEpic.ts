import { combineEpics } from 'redux-observable';
import { matchesEpic } from '../../entities/match/model/matchesEpic';

export const rootEpic = combineEpics(matchesEpic);
