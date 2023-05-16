import { atom } from "recoil";

export const dotState = atom({
  key: "dotState", // unique ID (with respect to other atoms/selectors)
  default: { x: 0, y: 0 }, // valeur par défaut (alias valeur initials)
});
