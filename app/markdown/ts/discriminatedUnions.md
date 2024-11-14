# Discriminated Unions

```ts
/**
 *
 * ? November 2nd, 2024
 *
 * * Use case:
 * * Fetching data from an API, but the response is different based on if the response was a success or not
 * * The respone will usually have a common key, such as "status", so Typescript can infer based on what the
 * * union type is. In this case, we have a status of 200 or 400, and that status response will dictate what the the
 * * other keys are.
 *
 */

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
