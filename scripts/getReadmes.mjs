import { promises as fs } from 'fs';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
const GITHUB_URI = 'https://api.github.com/users/eneko96/repos';
const projectsDir = `./src/content/projects`;
const GITHUB_KEY = process.env.GITHUB_KEY;

const options = {
  Authorization: `Bearer ${GITHUB_KEY}`,
  Accept: 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
};

const deleteReadmes = () => {
  fs.readdir(projectsDir, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      return;
    }

    files.forEach((file) => {
      if (path.extname(file) === '.md') {
        const filePath = path.join(projectsDir, file);

        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Error deleting file ${file}: ${err}`);
            return;
          }
          console.log(`Deleted: ${file}`);
        });
      }
    });
  });
};

const getRepos = async () => {
  try {
    const repos = await fetch(GITHUB_URI, { headers: { ...options } });
    const res = await repos.json();
    return res;
  } catch (err) {
    console.error('Failed to fetch the repos');
  }
};

const getReadme = async (repo) => {
  try {
    const readme = await fetch(
      `https://raw.githubusercontent.com/Eneko96/${repo.name}/main/README.md`,
      {
        headers: {
          ...options,
        },
      },
    );
    if (!readme.ok) {
      throw new Error(`Could not fetch README for this one ${repo.name}`);
    }
    const readmeText = await readme.text();
    return readmeText;
  } catch (err) {
    console.error(`Failed to fetch or parse README for ${repo.name}`);
    return '## There is no content for this project at the moment';
  }
};

const getPercentage = (num, total) => Math.floor((num * 100) / total);

const getLanguage = async (name) => {
  try {
    const language = await fetch(
      `https://api.github.com/repos/Eneko96/${name}/languages`,
      {
        headers: {
          ...options,
        },
      },
    );
    const res = await language.json(); // gives the languages and the amount of lines used
    const total = Object.values(res).reduce((acc, curr) => acc + curr, 0);
    return JSON.stringify(
      Object.keys(res).map((el) => {
        return {
          lang: el,
          perc: getPercentage(res[el], total),
        };
      }),
    );
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
  const languages = await Promise.all(
    repos.map((repo) => getLanguage(repo.name)),
  );

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

deleteReadmes();
downloadReadmes();
