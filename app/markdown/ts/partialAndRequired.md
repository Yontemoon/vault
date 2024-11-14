# Partial and Required

```ts
type Todo = {
  title: string;
  completed?: boolean;
  address?: {
    street?: string;
  };
};

type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> & T;

type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>;

type RequiredTodoForm = RequiredPick<Todo, "address" | "completed">;

type PartialFormTodo = PartialPick<Todo, "title">;

const test: Required<Todo> = {
  title: "Foo",
  completed: true,
  address: {
    street: "Bar",
  },
};

const requiredTodo: RequiredTodoForm = {
  title: "Hello World",
  completed: true,
  address: {
    street: "test",
  },
};

const partialTodo: PartialFormTodo = {
  completed: true,
};
```
