# Check Types

```ts
/**
 *
 * ? November 2nd, 2024
 *
 * * To check if its a specific primitive, you can do the simple typeof check...
 * * To check for a specific object, like Date, use instanceof.
 *
 * * To check union types, you can do a switch case
 *
 */

type Todo = {
  title: string;
  priority: "High" | "Normal" | "Low";
  isComplete: boolean;
  description: string;
  dueDate: string | Date;
};

function doSomething(todo: Todo) {
  if (typeof todo.dueDate === "string") {
    todo.dueDate.toLowerCase();
  } else if (todo.dueDate instanceof Date) {
    todo.dueDate.getTime();
  }
}

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
