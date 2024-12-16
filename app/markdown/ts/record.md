# Record

## December 15th, 2024

---

One of the most common "utility" types I use quite often is the Record type. Its a type that allows you to group your original type into specific groups.

Here is an example of what I mean. We have a simple Person type that has a name, their age, and if they are a citizen.

```ts
type Person = {
  name: string;
  age: number;
  isCitizen: boolean;
};
```

What if I wanted to create a function that maps an array of Person and returns an object that has a key of the age, and an array of Person that fit that age.

For example, i want to return something like this:

```ts
const groupedByAge = {
  24: [
    {
      name: "Monte",
      age: 24,
      isCitizen: true,
    },
    {
      name: "Hannah",
      age: 24,
      isCitizen: true,
    },
  ],
  25: [
    {
      name: "Tony",
      age: 25,
      isCitizen: false,
    },
    {
      name: "Turco",
      age: 25,
      isCitizen: true,
    },
    {
      name: "Felipe",
      age: 25,
      isCitizen: true,
    },
  ],
};
```

You can create a new type of this that will look like this:

```ts
type PeopleGroupedByAge = {
  [key: Person["age"]]: Person[];
};
```

This is not wrong, but there is a simplier answer to this! This is where Records come in:

```ts
type RecordPeopleGroupedByAge = Record<Person["age"], Person[]>;
```

It takes in two parameters, a Key and a Value. Pretty simple!
