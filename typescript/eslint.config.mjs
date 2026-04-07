import js from '@eslint/js';
import tseslint from 
Notification-preferences-A Credit Card offer is here.-Secure-login-banner-Apr 07, 2026 at 16:25:24
Notification-preferences-A Credit Card offer is here.-Secure-login-banner-Apr 07, 2026 at 16:25:24
Need a second chance at credit, Jazmyne?
Notification-preferences-A Credit Card offer is here.-Secure-login-banner-Apr 07, 2026 at 16:25:24
The PREMIER Bankcard Credit Card was designed to help you build credit and do the things you dream of doing.
Why choose PREMIER Bankcard?
Credit Limit Increases
Credit limit increase eligible after 12 months of consistent responsible account management.

Award-winning US-based Customer Service
Our dedicated team of professionals are one phone call away and ready to help you.

Monthly Credit Reporting
PREMIER Bankcard reports to the Consumer Reporting Agencies to help you build credit.
 
1 Build credit by keeping your balance low and paying all your bills on time every month.
You can start building a brighter credit future.
Apply Now
Notification-preferences-A Credit Card offer is here.-Secure-login-banner-Apr 07, 2026 at 16:25:24


This is an email advertisement. Unsubscribe.

PREMIER Bankcard®
3820 N. Louise Ave.
Sioux Falls, SD 57107

To unsubscribe from this newsletter, please notify us here.

ArcaMax Publishing, LLC, 1706 Todds Lane, Box 311, Hampton, VA 23666

https://www.arcamax.com (Family-Friendly News & Fun)


Advertise With Us | Contact Us | Privacy Policy

 
Alert. Email is incomplete due to blocked images. Add to safe sender list now.
'@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import jest from 'eslint-plugin-jest';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';
import { includeIgnoreFile } from '@eslint/compat';
import { URL, fileURLToPath } from 'node:url';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default [
  includeIgnoreFile(gitignorePath),
  js.configs.recommended,
  {
    files: ['src/**/*.ts', 'src/**/*.js'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier,
      import: importPlugin,
      jest,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...jest.configs.recommended.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  prettierConfig,
];
