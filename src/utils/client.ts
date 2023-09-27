import { VALID_METHODOLOGIES } from './methodologies';
import { VALID_PROJECT_TYPE } from './projectType';

export const serializeClient = (clients: string): string[] => {
  if (clients.length === 0) return ['myself'];
  const parsed = clients.split(',');
  const res: string[] = [];
  VALID_PROJECT_TYPE.reduce((acc, curr) => {
    if (parsed.includes(curr)) acc.push(curr);
    return acc;
  }, res);

  VALID_METHODOLOGIES.reduce((acc, curr) => {
    if (parsed.includes(curr)) acc.push(curr);
    return acc;
  }, res);

  return res;
};
