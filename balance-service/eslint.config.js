// eslint.config.js

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  // Incluye las reglas recomendadas de JavaScript puro (ESLint por defecto)
  js.configs.recommended,

  // Incluye reglas recomendadas de TypeScript
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked, // Añade reglas que requieren análisis de tipos (type-checking)

  // Añade Prettier para evitar conflictos entre ESLint y Prettier (solo formato, no estilo)
  prettier,

  // Especifica qué carpetas y archivos ignorar en el análisis de ESLint
  {
    ignores: ['node_modules', 'dist', '**/*.js'],
  },

  // Configuración y reglas personalizadas específicas para archivos TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
      },
    },
    rules: {
      // ----------- REGLAS PERSONALIZADAS ------------

      // Advierte (warn) si se usa el tipo 'any'. Idealmente, hay que evitarlo.
      '@typescript-eslint/no-explicit-any': 'warn',

      // Advierte si hay variables declaradas y no usadas.
      // El parámetro argsIgnorePattern: '^_' permite no marcar como error los argumentos de función que empiezan por '_'.
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      // Desactiva la obligación de declarar el tipo de retorno en todas las funciones.
      '@typescript-eslint/explicit-function-return-type': 'off',

      // Desactiva la obligación de declarar el tipo de los parámetros de los módulos exportados.
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // Desactiva la obligación de usar el prefijo 'I' en nombres de interfaces (ej: IUsuario).
      '@typescript-eslint/interface-name-prefix': 'off',

      // Obliga a un orden específico en los miembros de las clases (firma, campos, constructor, métodos).
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: ['signature', 'field', 'constructor', 'method'],
        },
      ],

      // ----------- REGLAS GENERALES DE BUENAS PRÁCTICAS -----------

      // Advierte si se usa 'console.log' o similares en el código.
      'no-console': 'warn',

      // Marca como error el uso de 'var' (usar 'let' o 'const' en su lugar).
      'no-var': 'error',

      // Obliga a usar 'const' en vez de 'let' cuando la variable no se reasigna.
      'prefer-const': 'error',

      // Obliga a usar '===' y '!==' en lugar de '==' y '!=' para comparaciones (comparación estricta).
      eqeqeq: ['error', 'always'],

      // ----------- REGLAS DE ORDEN DE IMPORTS -----------

      // Advierte si los imports no están ordenados alfabéticamente.
      // Puedes ajustar la configuración según prefieras.
      'sort-imports': [
        'warn',
        {
          ignoreCase: true, // Ignora mayúsculas/minúsculas al ordenar
          ignoreDeclarationSort: false, // No ignorar el orden de las declaraciones
          ignoreMemberSort: false, // No ignorar el orden de los miembros importados
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'], // Orden sugerido
        },
      ],

      // Puedes agregar/quitar reglas según tus necesidades.
    },
  },
];
