import React from 'react';
import { Card } from '../ui/Card';

type Resource = {
  title: string;
  image?: string;
  summary: string;
  link: string;
};

const resources: Resource[] = [
  {
    title: 'React Official Documentation',
    image: '/images/react-docs.png',
    summary: 'Reference for building components, managing state, and using hooks.',
    link: 'https://react.dev/',
  },
  {
    title: 'TypeScript Handbook',
    image: '/images/ts-handbook.png',
    summary: 'Covers basic and advanced TypeScript concepts used in the component library.',
    link: 'https://www.typescriptlang.org/docs/',
  },
  {
    title: 'Storybook for React',
    image: '/images/storybook.png',
    summary: 'Used in Assignment 12 and 13 to document and test UI components in isolation.',
    link: 'https://storybook.js.org/docs/react',
  },
  {
    title: 'Docker Documentation',
    image: '/images/docker-docs.png',
    summary: 'Explains how to build images, run containers, and publish ports for React apps.',
    link: 'https://docs.docker.com/',
  },
  {
    title: 'GitHub Actions Documentation',
    image: '/images/github-actions.png',
    summary: 'Used in Assignment 13 to run CI steps on every push and pull request.',
    link: 'https://docs.github.com/actions',
  },
];

export const ResourcesPage: React.FC = () => {
  return (
    <div className="page">
      {resources.map((res) => (
        <Card key={res.title} title={res.title}>
          {res.image && (
            <img
              src={res.image}
              alt={res.title}
              width={320}
              height={200}
              className="resource-image"
            />
          )}
          <p>{res.summary}</p>
          <p>
            <a href={res.link} target="_blank" rel="noreferrer">
              Visit resource
            </a>
          </p>
        </Card>
      ))}
    </div>
  );
};
