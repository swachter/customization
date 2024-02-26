import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import * as expectType from 'eslint-plugin-expect-type';

const tsConfig = tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
                sourceType: 'module'
            }
        }
    },
    {
        ignores: ['**/out/']
    },
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        }
    },
    {
        files: ['**/test/**/*', '**/test-d/**/*'],
        rules: {
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-redundant-type-constituents': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/require-await': 'off'
        }
    }
);

const expectTypeConfig = {
    ...expectType.configs.recommended,
    plugins: {
        'expect-type': expectType
    }
}

export default [... tsConfig, expectTypeConfig];
