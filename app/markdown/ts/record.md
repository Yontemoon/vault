```ts
/**
 * ? November 2nd, 2024
 *
 * ! I think this one important
 * * Record <keys, Type>
 * * How I see it, a utility type that groups your original type into specific groups.
 * * In this example, it groups a people into their age.
 *
 */

type Person = {
  name: string;
  age: number;
  isCitizen: boolean;
};

// This and Record are basically the same thing... just different syntax
type PeopleGroupedByAge = {
  [key: Person["age"]]: Person[];
};

type RecordPeopleGroupedByAge = Record<Person["age"], Person[]>;

const groupedByAge: RecordPeopleGroupedByAge = {
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
