// The excuse lives in entry.txt, not in this file, so the joke can be
// swapped without touching the code that delivers it.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The grader runs this script from a directory that is not the repo,
// so the entry is located next to this file, never via the working directory.
const here: string = dirname(fileURLToPath(import.meta.url));
const text: string = readFileSync(join(here, "entry.txt"), "utf8");

// A blank or over-long line never reaches the judge: fail loudly instead.
if (text.trim().length === 0 || text.length > 200) {
  console.error("entry.txt must be 1-200 non-whitespace characters");
  process.exit(1);
}

// A short line travels light: one file in, one file out, nothing else attached.
// The script keeps no memory between runs, so each delivery starts clean.
// If the entry ever grows noisy, the guard above speaks first, not the judge.
// Handing the text over unchanged is the whole job; the joke does the rest.
// The output directory comes from the harness; fall back to a local
// folder so the script still runs by hand for a quick smoke test.
const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
