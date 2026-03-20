export const solve = (a, b, c) => {
  a = Number(a);
  b = Number(b);
  c = Number(c);

  if ([a, b, c].some((n) => !isFinite(n) || isNaN(n))) {
    throw new Error("a, b, and c must be finite numbers.");
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return { roots: "no real roots", discriminant };
  }

  const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

  return {
    roots: x1 === x2 ? [x1] : [x1, x2],
    discriminant,
  };
};
