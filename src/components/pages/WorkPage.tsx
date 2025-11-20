import React from 'react';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';

type WorkItem = {
  id: string;
  title: string;
  image?: string;
  description: string;
  link: string;
  tech: string[];
  list: string[];
};

const workItems: WorkItem[] = [
  {
    id: 'a11',
    title: 'Coding Assignment 11 – Dockerized React App',
    image: '/images/assignment11.png',
    description:
      'A very small React application created with create-react-app and packaged in a Docker container. The app renders an H1 with the text "Codin 1" and runs on port 7775 inside the container.',
    link: 'https://github.com/ychen21-rrc/assignment11',
    tech: ['React', 'create-react-app', 'Docker'],
    list: [
      'Created a beginner React app using npx create-react-app app',
      'Configured Dockerfile with a custom workdir and container name',
      'Exposed the app on http://localhost:7775 from the container',
    ],
  },
  {
    id: 'a12',
    title: 'Assignment 12 – Web Component Library (React + TypeScript + Storybook)',
    image: '/images/assignment12.png',
    description:
      'A small UI component library built with React, TypeScript and styled-components. The project includes a demo app, Storybook documentation, unit tests, and a Dockerfile that serves a production build on port 8083.',
    link: 'https://github.com/ychen21-rrc/assignment12',
    tech: ['React', 'TypeScript', 'styled-components', 'Storybook', 'Docker'],
    list: [
      'Designed reusable UI components for buttons, layout, and typography',
      'Documented components using Storybook on localhost:6006',
      'Built and ran the library inside Docker on port 8083',
    ],
  },
  {
    id: 'a13',
    title: 'Assignment 13 – Web Component Library with CI, Quality Checks and Docker',
    image: '/images/assignment13.png',
    description:
      'An improved version of the component library. This repo adds code quality tooling, a GitHub Actions workflow and a Docker image that runs on port 8018.',
    link: 'https://github.com/ychen21-rrc/assignment13',
    tech: ['React', 'TypeScript', 'ESLint', 'Prettier', 'Jest', 'GitHub Actions', 'Docker'],
    list: [
      'Added linting, formatting and test:ci scripts',
      'Configured Husky + lint-staged to run checks before each commit',
      'Set up a GitHub Actions CI pipeline to run install, lint, test and build',
      'Built a Docker image that serves the production build on port 8018',
    ],
  },
];

export const WorkPage: React.FC = () => {
  return (
    <div className="page">
      {workItems.map((item) => (
        <Card key={item.id} title={item.title}>
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              width={500}
              height={350}
              className="work-image"
            />
          )}
          <p>{item.description}</p>

          <ul>
            {item.list.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <div className="tag-row">
            {item.tech.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>

          <p>
            <a href={item.link} target="_blank" rel="noreferrer">
              View source on GitHub
            </a>
          </p>
        </Card>
      ))}
    </div>
  );
};
