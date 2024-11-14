# Return Types

```ts
/**
 *
 * ? November 2nd, 2024
 *
 * * Fairly straight forward, create types that either return the type in the function
 * * or returns the parameter types.
 *
 * * Some use cases:
 * * -- Using a third Party library... creating a type to display the parameters more easily(?)
 *
 */

function checkLength(a: string, b: number) {
  return a.length < b;
}

type TReturnType = ReturnType<typeof checkLength>;
type TParamType = Parameters<typeof checkLength>;
```
