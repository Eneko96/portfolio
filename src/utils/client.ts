const VALID_CLIENTS = ['myself', 'hackathon'];

export const serializeClient = (clients: string[]): string => {
  if (clients.length === 0) return 'myself';
  const res = clients.find((client) =>
    VALID_CLIENTS.includes(client.toLowerCase()),
  );

  return res ?? 'myself';
};
