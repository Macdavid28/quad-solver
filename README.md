# quadratic-solver

> Solve quadratic equations of the form **ax² + bx + c = 0** — via CLI or REST API.

---

## Installation

**Global** — to use the CLI from anywhere:

```bash
npm install -g quadratic-solver
```

**Local** — to run the API server in a project:

```bash
npm install quadratic-solver
```

---

## CLI

```bash
quadratic-solver <a> <b> <c>
```

Solves `ax² + bx + c = 0` and prints the result.

### Examples

```bash
quadratic-solver 1 -5 6
# { roots: [ 3, 2 ], discriminant: 1 }

quadratic-solver 1 -2 1
# { roots: [ 1 ], discriminant: 0 }

quadratic-solver 1 0 1
# { roots: 'no real roots', discriminant: -4 }
```

---

## REST API

Start the server:

```bash
npx quadratic-solver-server
# or, if installed locally:
npm start
```

Server runs on `http://localhost:3000` by default.  
Set a custom port with the `PORT` environment variable:

```bash
PORT=4000 npm start
```

### `POST /solve`

**Request**

```http
POST /solve
Content-Type: application/json

{
  "a": 1,
  "b": -5,
  "c": 6
}
```

**Responses**

| Case               | `roots`           | `discriminant` |
| ------------------ | ----------------- | -------------- |
| Two distinct roots | `[3, 2]`          | `> 0`          |
| Double root        | `[1]`             | `0`            |
| No real roots      | `"no real roots"` | `< 0`          |

**Example with curl:**

```bash
curl -X POST http://localhost:3000/solve \
  -H "Content-Type: application/json" \
  -d '{"a": 1, "b": -5, "c": 6}'
```

```json
{ "roots": [3, 2], "discriminant": 1 }
```

**Error (400)** — when `a`, `b`, or `c` is missing:

```json
{ "error": "Provide a, b, and c in the request body." }
```

---

## API Reference

### `solve(a, b, c)`

The core function exported by this package.

```js
import { solve } from "quadratic-solver";

solve(1, -5, 6); // { roots: [3, 2],          discriminant: 1  }
solve(1, -2, 1); // { roots: [1],             discriminant: 0  }
solve(1, 0, 1); // { roots: 'no real roots', discriminant: -4 }
```

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| `a`       | `number` | Coefficient of x² |
| `b`       | `number` | Coefficient of x  |
| `c`       | `number` | Constant term     |

**Returns:**

```ts
{
  roots: number[] | "no real roots",
  discriminant: number
}
```

**Throws** `Error` if any coefficient is not a finite number.

---

## Author

**Temiloluwa Tomilola David**

---

## License

[MIT](./LICENSE)
