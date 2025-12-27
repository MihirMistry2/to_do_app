# ARCHITECTURE for To-Do App

## 📁 Project Overview

This document explains the folder structure and architectural decisions behind the **To-Do App** — a modern task management app built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

---

## 📂 Directory Structure

```
to_do_app/
├── README.md
├── ARCHITECTURE.md
├── eslint.config.js
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── .prettierignore
├── .prettierrc
├── public/
│   └── demo.gif
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── assets/
    ├── components/
    │   ├── layout/
    │   │   ├── AppLayout.tsx
    │   │   ├── Header.tsx
    │   │   ├── Main.tsx
    │   │   └── Toaster.tsx
    │   ├── skeleton/
    │   │   ├── TodoItem.tsx
    │   │   └── TodoList.tsx
    │   ├── todo/
    │   │   ├── EmptyState.tsx
    │   │   ├── TodoAdd.tsx
    │   │   ├── TodoContainer.tsx
    │   │   ├── TodoFilters.tsx
    │   │   ├── TodoItem.tsx
    │   │   └── TodoList.tsx
    │   └── ui/
    │       ├── IconButton.tsx
    │       ├── SearchInput.tsx
    │       ├── ToggleTheme.tsx
    │       └── Tooltip.tsx
    ├── constants/
    │   └── index.ts
    ├── hooks/
    │   ├── useDarkMode.ts
    │   └── useTodos.ts
    ├── services/
    │   ├── todo.service.ts
    │   └── todo.storage.ts
    ├── styles/
    │   ├── index.css
    │   ├── toast.css
    │   └── themes/
    │       ├── base.css
    │       └── dark.css
    ├── types/
    │   ├── filter.ts
    │   ├── index.ts
    │   ├── layout.ts
    │   ├── theme.ts
    │   ├── toast.ts
    │   ├── todo.ts
    │   └── ui.ts
    └── utils/
        └── toast.ts
```

---

## 🧠 Architectural Layers

### 1. Root & Tooling

* `vite.config.ts`: Vite + React + Tailwind setup
* `tailwind.config.js`: Tailwind content paths & theme
* ESLint & Prettier configs
* TypeScript configs (tsconfig)

### 2. Entry Point

* `main.tsx`: App mounting
* `App.tsx`: Main layout and component composition

### 3. Components

* **layout/**: App shell, header, main, toaster
* **skeleton/**: Placeholder UI
* **todo/**: Task-related components (list, add, filters)
* **ui/**: Generic components (buttons, inputs, toggle, tooltip)

### 4. Hooks

* `useDarkMode`: Theme toggling
* `useTodos`: Central todo logic

### 5. Services

* `todo.service.ts`: Business logic
* `todo.storage.ts`: LocalStorage persistence

### 6. Styles

* Tailwind & custom CSS files
* `themes/` folder for light & dark modes
* `toast.css` for notifications

### 7. Types

* Type definitions for todos, filters, layout, UI, theme, toast

### 8. Utilities

* `toast.ts`: Standardized toast notifications

---

## 🧠 Design Principles

* **Modularity**: Feature-based folders
* **Reusability**: Shared UI primitives & utils
* **Separation of concerns**: Logic vs. presentation
* **Scalability**: Easy to add new features

---

## 📌 Summary

This architecture ensures a **clean, maintainable, and scalable** codebase for the React + TypeScript + Vite To-Do App.
