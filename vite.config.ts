/// <reference types="vitest/config" />
import devtoolsJson from "vite-plugin-devtools-json";
import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [sveltekit(), devtoolsJson()],
  optimizeDeps: {
    include: ['storybook/test']
  },
  test: {
    environment: 'jsdom',
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          include: ['src/**/*.spec.{js,ts}'],
        }
      },
      {
        extends: true,
        plugins: [
          storybookTest({ configDir: path.join(dirname, '.storybook') })
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: 'firefox' }]
          },
          setupFiles: []
        }
      }
    ]
  }
});