import { createServerFn } from "@tanstack/start";

const getTesting = createServerFn("GET", async () => {
  return "testing123";
});

export { getTesting };
