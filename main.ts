import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The 3 AM Excuse — make.fun bounty u-hazel-walrus-38-4764-the-3-am-excuse-c1017878
// One line, in the voice of a hardware wallet that refuses to sign at 3 AM.
// The wallet's excuse: at 3 AM it only signs for owners sober enough to
// recite their own seed phrase backwards — a test nobody passes half-asleep.
const ENTRY =
  "At 3 AM I only sign for people who can spell their own seed phrase backwards. You can't even spell it forwards.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const parts = ENTRY.split("\n");
const hasContent = ENTRY.trim().length > 0;
const fitsLimit = ENTRY.length >= 1 && ENTRY.length <= 200;
if (parts.length !== 1 || !hasContent || !fitsLimit) {
  throw new Error("excuse line rejected: needs exactly one non-empty line up to 200 chars");
}
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
