import fs from "node:fs";
import fsPromise from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import language_codes from "../_data/language-codes.json";
import { languageCodesTemplate, typesTemplate } from "./templates";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const formatFile = "utf-8";
const rootDir = path.join(__dirname, "..");
const dir = path.join(rootDir, "src");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const cultureNamesFilePath = path.join(rootDir, `/src`, `/language-codes.ts`);
const typesFilePath = path.join(rootDir, `/src`, `/types.ts`);

Promise.all([
  fsPromise.writeFile(typesFilePath, typesTemplate(language_codes), formatFile),
  fsPromise.writeFile(cultureNamesFilePath, languageCodesTemplate(language_codes), formatFile),
]).then(() => {
  console.info("Write src/types.ts");
  console.info("Write src/language-codes.ts");
});
