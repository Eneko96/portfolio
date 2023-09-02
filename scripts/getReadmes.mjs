import { promises as fs } from 'fs';
const GITHUB_URI = 'https://api.github.com/users/eneko96/repos';
const projectsDir = `../src/pages/content/projects`;

const getRepos = async () => {
  try {
    const repos = await fetch(GITHUB_URI);
    return repos.json();
  } catch (err) {
    console.log('Failed to fetch the repos');
  }
};

const getReadme = async (repo) => {
  try {
    const readme = await fetch(
      `https://raw.githubusercontent.com/Eneko96/${repo.name}/main/README.md`,
    );
    if (!readme.ok) {
      throw new Error(`Could not fetch README for this one ${repo.name}`);
    }
    const readmeText = await readme.text();
    return readmeText;
  } catch (err) {
    console.error(`Failed to fetch or parse README for ${repo.name}`);
    return '';
  }
};

const getLanguage = async (name) => {
  try {
    const language = await fetch(
      `https://api.github.com/repos/Eneko96/${name}/languages`,
    );
    const res = await language.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

const appendMetadata = (metadata) => {
  return Object.keys(metadata)
    .map((key) => `${key}: ${metadata[key]}`)
    .join('\n');
};

const downloadReadmes = async () => {
  const repos = await getRepos();
  const readmes = await Promise.all(repos.map((repo) => getReadme(repo)));
  const languages = await Promise.all(repos.map((repo) => getLanguage(repo)));

  Promise.all(
    repos.map(({ name, description, html_url, created_at, topics }, idx) => {
      const metadata = appendMetadata({
        name,
        description,
        html_url,
        created_at,
        topics,
        languages: languages[idx],
      });
      const completeContent = `---\n${metadata}\n---\n${readmes[idx]}`;

      return fs
        .writeFile(`${projectsDir}/${name}.md`, completeContent)
        .then(() => {
          console.log('written successfully');
        })
        .catch((err) => {
          console.log('an error', err);
        });
    }),
  )
    .then(() => {
      console.log('All READMEs saved.');
    })
    .catch((err) => {
      console.error('An error occurred:', err);
    });
};

downloadReadmes();