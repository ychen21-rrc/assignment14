import React from 'react';
import { Card } from '../ui/Card';

export const DevSetupPage: React.FC = () => {
  return (
    <div className="page">
      <Card title="Developer Setup" subtitle="Tools and workflow I use to build these projects">
        <h3>Editor</h3>
        <p>
          I use <strong>Visual Studio Code</strong> as my main editor.
          Helpful extensions include:
        </p>
        <ul>
          <li>ESLint – shows lint errors in the editor</li>
          <li>Prettier – keeps formatting consistent</li>
        </ul>

        <h3>Terminal</h3>
        <p>
          I usually run <code>npm install</code>, <code>npm start</code>,
          <code>npm test</code> and Docker commands directly from the integrated
          VS Code terminal.
        </p>

        <h3>Preferred font</h3>
        <p>
          My preferred font family in Visual Studio Code is{' '}
          <code>Menlo, Monaco, 'Courier New', monospace</code>. This
          monospaced font makes the code easier to read and keeps alignment
          consistent across different editors and platforms.
        </p>

        <h3>Dev tools</h3>
        <p>
          In the browser I use the the built-in Chrome DevTools 
          to inspect components, network requests, and layout.
        </p>
      </Card>
    </div>
  );
};
