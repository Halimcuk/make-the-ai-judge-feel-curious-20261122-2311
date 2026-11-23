// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt
// for local testing). Deterministic: the same text every run, no network,
// stdlib only (Node 22).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Every morning the lighthouse keeper writes one sentence in a logbook no one will ever read, " +
  "then folds the page into a paper boat. " +
  "The boats collect in a drawer, unlaunched. " +
  "Tonight he opens the drawer — and the topmost boat is gone.";

// The grader reads /output/entry.txt; $MAKEFUN_OUTPUT_DIR only exists so the
// same code can be run locally without touching /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
