# Check Types

### December 3rd, 2024

---

Sometimes you will have a variable where you don't know what the type is. In this example, we have a `dueDate` key where it can either be a string or a Date type. We also
have a `priority` key where it has a union type of either "High", "Normal", or "Low".

```ts
type Todo = {
  title: string;
  priority: "High" | "Normal" | "Low";
  isComplete: boolean;
  description: string;
  dueDate: string | Date;
};
```

## Instanceof vs typeof

Simply put, use instanceof for custom types and use typeof for built-in types.

```ts
function getDate(todo: Todo) {
  if (typeof todo.dueDate === "string") {
    todo.dueDate.toLowerCase();
  } else if (todo.dueDate instanceof Date) {
    todo.dueDate.getTime();
  }
}
```

## Union Types

For union types, a simple switch-case would do the trick.

```ts
function getPriorty(todo: Todo) {
  switch (todo.priority) {
    case "Low":
      console.log(todo.priority);
      break;
    case "Normal":
      console.log(todo.priority);
      break;
    case "High":
      console.log(todo.priority);
      break;
  }
}
```
