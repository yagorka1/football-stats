export interface SelectOption {
  value: string;
  label: string;
}

export const STATUS_OPTIONS: SelectOption[] = [
  { value: '', label: 'All statuses' },
  { value: 'SCHEDULED', label: 'Scheduled' },
  { value: 'LIVE', label: 'Live' },
  { value: 'IN_PLAY', label: 'In Play' },
  { value: 'PAUSED', label: 'Paused' },
  { value: 'FINISHED', label: 'Finished' },
  { value: 'POSTPONED', label: 'Postponed' },
  { value: 'CANCELLED', label: 'Cancelled' },
];

// football-data.org competition ids available on the free plan.
// Verify against your own plan if a request returns 403.
export const COMPETITION_OPTIONS: SelectOption[] = [
  { value: '', label: 'All competitions' },
  { value: '2021', label: 'Premier League' },
  { value: '2014', label: 'La Liga' },
  { value: '2002', label: 'Bundesliga' },
  { value: '2019', label: 'Serie A' },
  { value: '2015', label: 'Ligue 1' },
  { value: '2003', label: 'Eredivisie' },
  { value: '2017', label: 'Primeira Liga' },
  { value: '2013', label: 'Brazilian Série A' },
  { value: '2001', label: 'Champions League' },
];
