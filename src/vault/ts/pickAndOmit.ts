/**
 *
 * ? November 2nd, 2024
 * * Picks and Omits
 * * Picks and Omit takes in two parameters, first being the type, and the second being the keys for that type.
 * * You can add multiple keys with the union symbol "|"
 * * Omit is exactly what is sounds, any key you put omits that from the new type.
 */
type Person = {
  name: string;
  age: number;
  address: {
    street: string;
    zipCode: number;
    country: string;
    usCitizen: boolean;
  };
};

// Only need the name of Person
type PersonName = Pick<Person, "name">;
type PersonAgeAndAddress = Pick<Person, "address" | "age">;

// Need everything but the name
type PersonNameless = Omit<Person, "name">;
