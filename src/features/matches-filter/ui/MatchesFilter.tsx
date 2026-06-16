import type { ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks';
import { setFilters } from '../../../entities/match/model/matchesSlice';
import type { MatchFilters } from '../../../shared/api/matches';
import { COMPETITION_OPTIONS, STATUS_OPTIONS } from '../config';

const fieldClass = 'rounded border px-2 py-1 text-sm font-normal';

export function MatchesFilter(): ReactElement {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.matches.filters);

  const handleChange = (field: keyof MatchFilters, value: string): void => {
    dispatch(setFilters({ ...filters, [field]: value }));
  };

  return (
    <div className="mb-4 flex flex-wrap gap-3">
      <label className="flex flex-col gap-1 text-sm font-medium">
        Date from
        <input
          type="date"
          value={filters.dateFrom}
          onChange={(e) => handleChange('dateFrom', e.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium">
        Date to
        <input
          type="date"
          value={filters.dateTo}
          onChange={(e) => handleChange('dateTo', e.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium">
        Status
        <select
          value={filters.status}
          onChange={(e) => handleChange('status', e.target.value)}
          className={fieldClass}
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-1 text-sm font-medium">
        Competition
        <select
          value={filters.competitionId}
          onChange={(e) => handleChange('competitionId', e.target.value)}
          className={fieldClass}
        >
          {COMPETITION_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
