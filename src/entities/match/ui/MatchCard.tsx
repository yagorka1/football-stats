import type { ReactElement } from 'react';
import type { Match } from '../../../shared/api/matches';
import { formatDate, formatTime } from '../../../shared/lib/formatDate';

function MatchScore({ match }: { match: Match }): ReactElement {
  const { fullTime } = match.score;
  const hasScore = fullTime.home !== null && fullTime.away !== null;

  if (hasScore) {
    return (
      <span className="text-xl font-bold">
        {fullTime.home} – {fullTime.away}
      </span>
    );
  }

  return <span className="text-sm text-gray-500">{formatTime(match.utcDate)}</span>;
}

export function MatchCard({ match }: { match: Match }): ReactElement {
  return (
    <li className="flex flex-col gap-1 border-b px-4 py-3">
      <span className="text-xs text-gray-400">
        {formatDate(match.utcDate)} · {match.stage.replace(/_/g, ' ')}
        {match.group ? ` · ${match.group.replace('GROUP_', 'Group ')}` : ''}
      </span>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center justify-end gap-2">
          <span className="text-right font-medium">{match.homeTeam.name}</span>
          <img src={match.homeTeam.crest} alt={match.homeTeam.tla} className="h-8 w-8 object-contain" />
        </div>
        <MatchScore match={match} />
        <div className="flex flex-1 items-center gap-2">
          <img src={match.awayTeam.crest} alt={match.awayTeam.tla} className="h-8 w-8 object-contain" />
          <span className="font-medium">{match.awayTeam.name}</span>
        </div>
      </div>
    </li>
  );
}
