export const VALID_PROJECT_TYPE = ['web', 'mobile', 'desktop', 'iot'];

export const projectTypeParser = (projectTypes: string): string => {
  if (projectTypes.length === 0) return 'web';
  const res = projectTypes
    .split(',')
    .find((projectType) =>
      VALID_PROJECT_TYPE.includes(projectType.toLowerCase()),
    );

  return res;
};
