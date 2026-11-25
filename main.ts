// Famous Last Words: The Funniest Epitaph
// Writes the epitaph in entry.txt to /output/entry.txt, byte for byte.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const text = readFileSync(join(here, "entry.txt"), "utf8");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
console.log(`wrote ${text.length} characters to ${join(outDir, "entry.txt")}`);
