// The Most Boring Object, Reviewed in One Line
// Entry: a one-line review of a doorstop — the dullest everyday object.
// The joke comes from how a doorstop really behaves: it lies on the floor,
// gets kicked and stepped on all day, and still lets the door slam anyway.
// Deterministic, offline, no network, no API calls, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "The doorstop lies on the floor getting kicked all day, and the door still slams anyway.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
