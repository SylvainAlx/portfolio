import { entity } from "simpler-state";

export let speak = entity("french");

export const change = (value) => {
  speak.set(value);
};
