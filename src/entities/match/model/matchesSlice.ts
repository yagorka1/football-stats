import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Match, MatchFilters } from '../../../shared/api/matches';

interface MatchesState {
  items: Match[];
  loading: boolean;
  error: string | null;
  filters: MatchFilters,
}

const initialState: MatchesState = {
  items: [],
  loading: false,
  error: null,
  filters: {
    dateFrom: '',
    dateTo: '',
    status: '',
    competitionId: '',
  }
};

export const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    // Trigger dispatched on mount; the epic reacts and starts the request.
    fetchMatches(state) {
      state.error = null;
    },
    // Emitted by the epic right before the HTTP call starts, so `loading`
    // turns true exactly when a request begins — not on every keystroke.
    fetchMatchesRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMatchesSuccess(state, action: PayloadAction<Match[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchMatchesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    // Updates filters only. Loading is intentionally NOT set here: the epic
    // debounces and the request action flips `loading`, so typing in a field
    // does not make the list flicker.
    setFilters(state, action: PayloadAction<MatchFilters>) {
      state.filters = action.payload;
    },
  },
});

export const {
  fetchMatches,
  fetchMatchesRequest,
  fetchMatchesSuccess,
  fetchMatchesFailure,
  setFilters,
} = matchesSlice.actions;
