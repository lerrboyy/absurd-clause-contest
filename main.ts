// The Absurd Clause Contest — entry program.
//
// Writes one original English sentence, phrased as a clause buried deep
// inside a terms-of-service agreement, to /output/entry.txt.
//
// The clause is a limitation-of-liability cap: the driest, most-skimmed
// boilerplate in any real ToS. It reads as pure legalese until the very
// last phrase, where the cap on the Company's liability turns out to be
// money — or one (1) firm handshake, whichever is greater.
//
// Gate (from the kit's RULES.txt): /output/entry.txt must be UTF-8 text
// of 1 to 200 characters, not only white space. The program validates the
// sentence against that gate before writing, and fails loudly instead of
// writing an invalid entry.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CLAUSE =
  "The Company's total liability under this Agreement shall not exceed the fees you paid in the preceding twelve (12) months, or one (1) firm handshake, whichever is greater.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");
const MAX_CHARS = 200;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// The entry must be exactly one sentence: a single terminal period,
// no other sentence-ending punctuation, no line breaks, no leading or
// trailing whitespace.
if (CLAUSE.length < 1 || CLAUSE.length > MAX_CHARS) {
  fail(`clause is ${CLAUSE.length} characters, gate requires 1-${MAX_CHARS}`);
}
if (CLAUSE.trim() !== CLAUSE) {
  fail("clause has leading or trailing whitespace");
}
if (/[\r\n]/.test(CLAUSE)) {
  fail("clause must be a single line");
}
if (!/^[^.!?]*\.$/.test(CLAUSE)) {
  fail("clause must be exactly one sentence ending in a single period");
}
if (/ {2,}/.test(CLAUSE)) {
  fail("clause contains a double space");
}
if (!/^[\x20-\x7E]*$/.test(CLAUSE)) {
  fail("clause must be plain printable ASCII English text");
}

// Create /output if the grader has not, then clear only its CONTENTS.
// Never remove /output itself: it is a grader mount point, and removing
// it fails the run.
mkdirSync(OUTPUT_DIR, { recursive: true });
for (const entry of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, entry), { recursive: true, force: true });
}

writeFileSync(OUTPUT_FILE, CLAUSE, "utf8");

// Round-trip check: read the file back and re-apply the gate to what is
// actually on disk, so a partial write or encoding surprise fails loudly
// here instead of silently grading as an invalid entry.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== CLAUSE) {
  fail("round-trip mismatch: file on disk differs from the clause");
}
if (written.length < 1 || written.length > MAX_CHARS || written.trim() === "") {
  fail(`written file is ${written.length} characters, gate requires 1-${MAX_CHARS} non-blank`);
}
console.log(`wrote ${OUTPUT_FILE} (${CLAUSE.length} characters)`);
console.log(CLAUSE);
