import React from 'react';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';

export const SkillsPage: React.FC = () => {
  return (
    <div className="page">
      <Card title="Technical Skills" subtitle="Skills used across Assignments 11–14">
        <p>
          During this course I focused on modern web development and build
          workflows. Below is a summary of the main skills I practised.
        </p>

        <h3>Frontend & Libraries</h3>
        <div className="tag-row">
          <Tag label="React" />
          <Tag label="TypeScript" />
          <Tag label="Component Design" />
          <Tag label="Storybook" />
        </div>

        <h3>Build, Quality and CI/CD</h3>
        <div className="tag-row">
          <Tag label="npm scripts" />
          <Tag label="ESLint" />
          <Tag label="Prettier" />
          <Tag label="Jest / Testing Library" />
          <Tag label="GitHub Actions" />
          <Tag label="Husky & lint-staged" />
        </div>

        <h3>Containers & Tooling</h3>
        <div className="tag-row">
          <Tag label="Docker" />
          <Tag label="VS Code" />
          <Tag label="Git" />
          <Tag label="Command Line" />
        </div>
      </Card>
    </div>
  );
};
