/**
 * ? November 2nd, 2024
 *
 * GENERICS
 *
 */

const input = document.querySelector<HTMLInputElement>(".input");

console.log(input?.value);

function getSecond<T>(array: T[]) {
  return array[1];
}

const a = [1, 2, 3];
const b = ["123", "heheh", "b"];

const retA = getSecond(a);
const retB = getSecond(b);

const newSet = new Set<string>();
newSet.add("hahha");
// newSet.add(23); // ! EXAMPLE ERROR

const newMap = new Map<number, string>();

newMap.set(15, "foo");
// newMap.set("foo", "bar"); // ! EXAMPLE ERROR

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

const testReponse: APIResponse<{ status: number; message: string }> = {
  data: {
    status: 200,
    message: "Hello world",
  },
  isError: false,
};

const testReponse2: APIResponse<Array<number>> = {
  data: [1, 2, 3, 4],
  isError: false,
};

// ? This part is a bit confusing...
// ? We don't know what T is, so we create a Generic.
// ? What we do know though, is that whatever type T is, its going to be
// ? the key in the return type.
function arrayToObj<T>(array: [string, T][]) {
  const obj: {
    [key: string]: T;
  } = {};

  array.forEach(([key, value]) => {
    obj[key] = value;
  });

  return obj;
}

const arr: [string, number | boolean][] = [
  ["keyOne", 1],
  ["keyTwo", 2],
  ["keyThree", true],
];

const answer = arrayToObj(arr);
