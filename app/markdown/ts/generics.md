# Generics

### December 7th, 2024

---

When learning Typescript for the first time, and even for seasoned Typescript developers, one of the hardest and most fundamental topics is Generics. While from my experience, one doesn't have to go in depth with generics it's still very useful to learn.

## Generic Functions

One of the most basic use cases for using Generics is when you have a function that returns a specific type based on the parameters being passed into that function.

```ts
function getSecond<T>(array: T[]) {
  return array[1];
}

const a = [1, 2, 3];
const b = ["123", "heheh", "b"];

const retA = getSecond(a); // Return type is a Number
const retB = getSecond(b); // Return type is a String
```

The `getSecond` function simply returns the second item in the array.

As you can see, you pass in a generic with the angle brackets before passing your parameters. Typescript is smart enough to know that whatever you pass in the parameters will be the return type.

## Sets and Maps

You have probably used Generics without knowing it. A common example in javascript is creating instances for Maps and Sets. Without the angle brackets, someone can put any type into the map or set without any errors. But by putting types in the angle bracket, you are creating type safety.

```ts
const newSet = new Set<string>();
newSet.add("A string!");
// newSet.add(23); // Error will pop up!

const newMap = new Map<number, string>();

newMap.set(15, "foo");
// newMap.set("foo", "bar"); // Error will pop up!
```

## API Responses

The same idea applies here. We are creating a new type called `TData` which has a default type assigned to it. You can assign a new type with the `nonDefaultResponse` and `nonDefaultResponse`by adding angle brackets after the `APIResponse` type.

```ts
type APIResponse<TData = { defaultValue: string; message: string }> = {
  data: TData;
  isError: boolean;
};

const defaultResponse: APIResponse = {
  data: {
    defaultValue: "Hi",
    message: "World",
  },
  isError: false,
};

const nonDefaultResponse: APIResponse<{ status: number; message: string }> = {
  data: {
    status: 200,
    message: "Hello world",
  },
  isError: false,
};

const nonDefaultResponse2: APIResponse<Array<number>> = {
  data: [1, 2, 3, 4],
  isError: false,
};
```
