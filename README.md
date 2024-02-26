The twoslash type assertions in [customization.test-d.mts](packages/utils/test-d/customization.test-d.mts) pass. The same type assertions in [ext-customization.test-d.mts](test-d/ext-customization.test-d.mts) fail. 


```shell
08:22 $ npm run lint:es

> customization@1.0.0 lint:es
> eslint '**/*.{ts,mts}'


/home/stwachte/projects/eigene/customization/test-d/ext-customization.test-d.mts
   5:7  error  Expected type to be: const x1: {
    x: number;
}
, got: const x1: Customization<{}, {
    x: number;
}>                            expect-type/expect
  10:7  error  Expected type to be: const x2: {
    x?: number | undefined;
}
, got: const x2: Customization<{}, {
    x?: number | undefined;
}>  expect-type/expect

✖ 2 problems (2 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.
```