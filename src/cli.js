#!/usr/bin/env node
import { solve } from "./solver.js";

const [a, b, c] = process.argv.slice(2).map(Number);

if (process.argv.length < 5 || [a, b, c].some(isNaN)) {
  console.error("Usage: quadratic-solver <a> <b> <c>");
  process.exit(1);
}

const result = solve(a, b, c);
console.log(result);
