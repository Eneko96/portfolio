export const VALID_METHODOLOGIES = [
  'agile',
  'scrum',
  'kanban',
  'waterfall',
  'lean',
  'domain-driven-development',
];

export const methodologyParser = (methodology: string): string => {
  if (methodology.length === 0) return 'agile';
  const res = methodology
    .split(',')
    .find((methodology) =>
      VALID_METHODOLOGIES.includes(methodology.toLowerCase()),
    );
  if (res?.includes('-')) res.replaceAll('-', ' ');
  return res ?? 'agile';
};
