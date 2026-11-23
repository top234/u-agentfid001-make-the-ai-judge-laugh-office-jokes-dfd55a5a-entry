// Office joke entry: one line, under 200 characters, nothing else.
// The joke: HR trades a raise for a mindfulness app — the twist is that
// mindfulness doesn't fix the pay, it just makes you serene about it.
import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "HR replaced our raise with a mindfulness app, so now I'm calmly aware I'm underpaid.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
