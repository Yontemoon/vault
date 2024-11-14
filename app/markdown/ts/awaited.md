# This is a test file

## Another side Header

This is a paragraph element.

---

```ts
/**
 * ? November 2nd, 2024
 *
 * * Removes the promise from any promise type.
 * * From what I can see for use cases, great for helper functions that are
 * * used in async functions
 */

async function doSomething() {
  // Does something like await fetch(url)
  return {
    name: "Monte",
    age: 26,
  };
}

// Awaited removes the promise
function useSomething(personInfo: Awaited<ReturnType<typeof doSomething>>) {
  console.log(personInfo);
}
```
