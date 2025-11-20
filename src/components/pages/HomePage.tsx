import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const HomePage: React.FC = () => {
  return (
    <div className="page">
      <Card
        title="Welcome to my Portfolio"
        subtitle="Business Systems Build and Testing – Coding Assignment 14"
      >
        <p>
          My name is <strong>Yaohuang Chen</strong>. I am a Full Stack Web Development
          student at Red River College Polytechnic.
        </p>
        <p>
          This portfolio website highlights the work I have done in WEBD-3012
          Business Systems Build and Testing. It also reuses a small UI
          component library that I created in previous assignments.
        </p>
        <p>
          The main focus of this site is to show how I use React, TypeScript,
          Docker, and simple CI/CD ideas to build and deploy web applications.
        </p>

        <Button
          variant="primary"
          onClick={() => (window.location.href = '/work')}
        >
          View my course work
        </Button>
      </Card>
    </div>
  );
};
