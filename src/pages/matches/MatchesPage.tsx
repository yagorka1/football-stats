import { useEffect, type ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { fetchMatches } from '../../entities/match/model/matchesSlice';
import { MatchCard } from '../../entities/match/ui/MatchCard';
import { MatchesFilter } from '../../features/matches-filter/ui/MatchesFilter';

export function MatchesPage(): ReactElement {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.matches);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  return (
    <div className="p-4">
      <MatchesFilter />

      {error && <p className="py-4 text-center text-red-500">Error: {error}</p>}
      {loading && <p className="py-4 text-center text-gray-500">Loading...</p>}
      {!loading && !error && items.length === 0 && (
        <p className="py-4 text-center text-gray-500">No matches found.</p>
      )}

      <ul>
        {items.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </ul>
    </div>
  );
}
