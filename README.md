# Test Work

A modern frontend project built with Vue 3, Vite, and TypeScript. This project was developed as a technical test and showcases clean component structure, state management with Pinia, reusable composables, and Vuetify 3 for UI.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Recommended IDE Setup](#recommended-ide-setup)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)

---

## Tech Stack

- **[Vue 3](https://vuejs.org/)** – Progressive frontend framework
- **[Vite](https://vitejs.dev/)** – Fast and modern build tool
- **[TypeScript](https://www.typescriptlang.org/)** – Strong typing for scalable code
- **[Pinia](https://pinia.vuejs.org/)** – State management library for Vue
- **[Vuetify 3](https://vuetifyjs.com/)** – Material Design UI components
- **[Vue I18n](https://vue-i18n.intlify.dev/)** – Internationalization plugin for Vue
- **[VueUse Head](https://vueuse.org/head/)** – Document head management
- **[Axios](https://axios-http.com/)** – Promise-based HTTP client
- **[DOMPurify](https://github.com/cure53/DOMPurify)** – XSS sanitizer for HTML
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** – Code quality and formatting

---

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:arsenyeghiazarian/store.git
cd store
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

The app should now be running at: [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

| Command              | Description                               |
|----------------------|-------------------------------------------|
| `npm run dev`        | Start local development server            |
| `npm run build`      | Build the app for production              |
| `npm run lint`       | Run ESLint to check and fix code style    |
| `npm run type-check` | Run type checking using `vue-tsc`         |
| `npm run format`     | Format the code based on .prettierrc.josn |

---

## Recommended IDE Setup

- [**Visual Studio Code**](https://code.visualstudio.com/)
- [**Volar Extension**](https://marketplace.visualstudio.com/items?itemName=Vue.volar) — recommended for Vue 3 + TypeScript support  
  _If installed, disable Vetur to avoid conflicts._

---

## Project Structure

```
src/
├── assets/              # Global styles and images
├── components/          # Reusable components
├── composables/         # Composition API logic
├── interfaces/          # TypeScript interfaces and model definitions
├── locales/             # Translation files (en.json, ru.json)
├── plugins/             # Plugin setups (Axios, Vuetify, i18n)
├── router/              # Vue Router configuration
├── services/            # API calls and business logic
├── stores/              # Pinia state stores
├── types/               # Global type declarations
├── utils/               # Utility functions and helpers
├── views/               # Page components tied to routes
├── App.vue              # Root component
└── main.ts              # Application entry file
```

---

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```env
VITE_BASE_URL=base-url
VITE_TOKEN=your-public-api-token
```
These values are required for the application to connect to the Ecwid API.
> 💡 **Note:** The actual `VITE_BASE_URL` and `VITE_TOKEN` values should be provided by the project owner.  
> Do not use placeholder values unless instructed.

You can access the environment variables in your code via:

```ts
const baseUrl = import.meta.env.VITE_BASE_URL;
const token = import.meta.env.VITE_TOKEN;
```

> ⚠️ Only variables prefixed with `VITE_` are exposed to the client. Do not commit sensitive values to version control.

---

## Editor Configuration for Prettier

To ensure consistent code formatting across all developers' machines, this project includes a local Prettier configuration (`.prettierrc`).

### VS Code Setup

1. Install the **Prettier – Code formatter** extension from the VS Code Marketplace.
2. Open **Settings** (`Ctrl + ,`), then search for:
- `Editor: Default Formatter` → set to `esbenp.prettier-vscode`
- `Format On Save` → ✅ enable it
3. VS Code will now use the project's local `.prettierrc` config when formatting.

> 💡 No global Prettier config is needed — the project will use the local settings automatically if configured like above.

---

## Internationalization

The application supports multiple languages. Currently available languages:

- **English** (en) - Default
- **Russian** (ru)

### Adding a New Language

1. Create a new translation file in `src/locales/` (e.g., `fr.json`)
2. Copy the structure from `en.json` and translate the values
3. Update `src/plugins/i18n.ts` to import and register the new language
4. Add the language option to `src/components/LanguageSwitch.vue`

### Using Translations

In components, use the `useI18n` composable:

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <h1>{{ t('catalog.products') }}</h1>
</template>
```

---

## SEO & Meta Tags

The application uses `@vueuse/head` for managing page titles and meta descriptions. Each page automatically updates its meta tags based on the current language and route.

Meta descriptions are defined in the translation files under the `meta` key and are automatically applied to each page.
