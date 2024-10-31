/**
 *
 * * Image you have data, but you want to reformat that data into specific categories.
 * * In this case, we have skill levels, and each skill level is group together so that each have an array of names associated with
 * * that skill level. That is where this comes in...
 *
 */

type SkillLevel = "Beginner" | "Intermediate" | "Expert" | "Master";

type Person = {
  name: string;
  skillLevel: SkillLevel;
};

type GroupBySkill = {
  [key in Person["skillLevel"]]: string[];
};

const groupBySkillLevel: GroupBySkill = {
  Beginner: ["Monte", "Sam", "Ricky"],
  Intermediate: ["Tony", "Greg"],
  Expert: ["Kyle", "Michael"],
  Master: ["Samatha", "Alfonso"],
};

console.log(groupBySkillLevel["Beginner"]);
console.log(groupBySkillLevel["Expert"]);
console.log(groupBySkillLevel["Intermediate"]);
console.log(groupBySkillLevel["Master"]);
