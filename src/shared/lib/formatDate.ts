export function formatDate(utcDate: string): string {
  return new Date(utcDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

export function formatTime(utcDate: string): string {
  return new Date(utcDate).toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
}
