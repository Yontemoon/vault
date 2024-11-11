/**
 * ? October 31st, 2024
 * * The "as const" tag at the end of the SKILL_LEVELS causes that variable to be a readonly variable.
 * * This means that the varaible cannot change. It also causes the variable to be a literal type (enums)
 * * As you can see on the Person type, we can inititalize that skillLevel by using the typeof tag SKILL_LEVELS
 *
 */

const SKILL_LEVELS = ["Beginner", "Intermediate", "Expert"] as const;

type Person = {
  name: string;
  skillLevel: (typeof SKILL_LEVELS)[number];
};

SKILL_LEVELS.forEach((skillLevel) => {
  console.log(skillLevel);
});

const testPerson: Person = {
  name: "Monte",
  skillLevel: "Beginner",
};

console.log(testPerson);
