import { combineReducers, configureStore, type Action } from '@reduxjs/toolkit';
import { createEpicMiddleware, type Epic } from 'redux-observable';
import { rootEpic } from './rootEpic';
import { matchesSlice } from '../../entities/match/model/matchesSlice';

const rootReducer = combineReducers({
  matches: matchesSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;

export type AppEpic = Epic<Action, Action, RootState>;
