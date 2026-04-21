# Geo Quest

A simple interactive geography quiz web application inspired by the gamification of [duolingo](https://duolingo.com) for the final project of **Human Computer Interaction** course at SEMO.

## Table of content

- [Features](#1-features)
- [Development](#2-development)
  - [Tech Stack](#21-tech-stack)
  - [Folder Structure](#22-folder-structure)
- [Production](#3-production)

## 1. Features

The website has few features all linked to the ultimate learn and take quiz format of the application.

1. **Quizes** - Different type of quizes from multiple choice to drag and order and more.
2. **Lessons** - Bite-sized lessons with gradual reveal of information.
3. **Gamification** - _Heart_ for sense of limited chances, _xp_ for sense of achievement, and _stamps_ for sense of completion.

## 2. Development

In this section, I will be describing the development process of the web application.

### 2.1. Tech Stack

This is a simple frontend only interactvie quiz web app hence the tech stack is very minimal.

> Main tech

- [React](https://react.dev/) - Framework for component based interactive JS web application
- [Vite](https://vite.dev/) - Fast JS based application bundler
- [Tailwindcss](https://tailwindcss.com) - For modular css
- [Typescript](https://www.typescriptlang.org/) - For type definition and saftey in Javascript

> Libraries

- [React Router](https://reactrouter.com) - For routing and navigation
- [Zustand](https://zustand.docs.pmnd.rs/learn/getting-started/introduction) - For state management
- [Localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - Along with zustand for persistent storage
- [Framer motion](https://www.framer.com/dictionary/framer-motion) - For animations
- [React simple maps](https://www.react-simple-maps.io/) - For world maps
- [Swapy](https://swapy.tahazsh.com/) - For drag and drop related interactions
- [React tooltip](https://react-tooltip.com/) - For tooltip

### 2.2. Folder structure

The folder structure I am following is a straight forward structure with each type of component sepearated in their respective folders.

```
> public (all the public assets)
> src (main source code)
  - App.tsx (main routing page)
  - index.css (main css file)
  - main.tsx (entry point)
  - types.d.ts (global type declaration)
  > assets (all the assets that is to be optimized by vite)
  > components (components in the app)
  > pages (pages of the app)
  > store (zustand configuration for state management)
  > utils (utility functions and data list)
```

### 2.3. Git and branch

Since it is a simple college project, I am using a 2-branch policy where the `main` branch is for **CI/CD** pipeline and `dev` branch for development pushes.

### 3. Production

The production of this project is a simple automatic CI/CD connection from `GITHUB` to `NETLIFY`.
