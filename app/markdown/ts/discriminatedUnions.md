# Discriminated Unions

### December 3rd, 2024

---

When working with 3rd party API's where you don't have access to the types being returned. You can create two separate
types and combine with with an or statement. Because the two responses will usually have a common key, in this case "status",
so Typescript can infer based on the union type.

```ts
type SuccessResponse = {
  status: 200;
  data: {
    id: string;
    name: string;
  };
};

type ErrorResponse = {
  status: 400;
  errorMessage: string;
};

type UserApiResponse = SuccessResponse | ErrorResponse;
```

You can then create a function that does what it needs to do based on what the status returns.

```ts
function getData(res: UserApiResponse) {
  switch (res.status) {
    case 200:
      console.log(res.data);
      break;
    case 400:
      console.log(res.errorMessage);
  }
}
```
