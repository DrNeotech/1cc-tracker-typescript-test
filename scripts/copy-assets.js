"use strict";

const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const outputDirectory = path.join(projectRoot, "dist");
const staticFiles = ["index.html", "touhouFont2.ttf", "touhouFontLittle.ttf"];

fs.mkdirSync(outputDirectory, { recursive: true });

for (const file of staticFiles) {
    fs.copyFileSync(path.join(projectRoot, file), path.join(outputDirectory, file));
}