# Assignment 14 – Portfolio Website (React + TypeScript)

A small **portfolio website** that highlights my course work for  
**WEBD-3012 Business Systems Build and Testing**.

This repo uses a simple UI component library and runs in Docker on port **5575**.

## 1) Requirements

- Node.js 18+ (recommend 20)
- npm
- Git
- Docker

## 2) Install

```bash
npm install
```

## 3) Run (development)

```bash
npm start
# open http://localhost:3000
```

## 4) Portfolio Pages

The site includes the following sections:
* Home – short introduction and overview of the course
* Work – details for Assignments 11, 12 and 13(title, description, list, image placeholder, GitHub link)
* Skills – main skills and tools used in the projects
* Resources – useful links (React, TypeScript, Storybook, Docker, CI/CD)
* Dev Setup – my editor, terminal, preferred font family, and dev tools

## 7) Docker (production build on port 5575)

Build image:

```bash
docker build -t chen_yaohuang_coding_assignment14 .
```

Run container (use required container name):

```bash
docker run --rm \
  -p 5575:5575 \
  --name chen_yaohuang_coding_assignment14 \
  chen_yaohuang_coding_assignment14

# open http://127.0.0.1:5575
```

