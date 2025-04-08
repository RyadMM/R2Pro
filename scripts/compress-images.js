import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

const inputDir = "public";
const outputDir = "public-optimized";
const configPath = "image-optimizations.json";

const readJSON = async (filePath) => {
  const content = await fs.readFile(filePath, "utf-8");
  return JSON.parse(content);
};

const ensureDirectoryExists = async (dirPath) => {
  await fs.mkdir(dirPath, { recursive: true });
};

const processImage = async (imagePath, config) => {
  console.log(`processImage: ${imagePath}`);
  const absoluteInputPath = path.resolve(imagePath);
  const relativePath = path.relative(inputDir, imagePath);
  const dir = path.dirname(relativePath);
  const baseName = path.basename(imagePath, path.extname(imagePath));

  if (path.extname(imagePath).toLowerCase() === '.svg') {
    console.log(`Skipping SVG: ${imagePath}`);
    return;
  }

  const outputSizes = config.optimized_dimensions || {};
  const format = (config.suggested_format || "webp").toLowerCase();

  for (const [device, { width, height }] of Object.entries(outputSizes)) {
    const outputFileName = `${baseName}-${device}.${format}`;
    const outputPath = path.join(outputDir, dir, outputFileName);
    await ensureDirectoryExists(path.dirname(outputPath));

    await sharp(absoluteInputPath)
      .resize(width, height)
      .toFormat(format)
      .toFile(outputPath);

    console.log(`✔️  Created ${outputFileName}`);
  }
};

const walkAndOptimize = async (dir, configMap) => {
  try {
    console.log(`walkAndOptimize dir: ${dir}`);
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      console.log(`walkAndOptimize: ${fullPath}`);
      const relativePath = fullPath.replace(/\\/g, "/");
      console.log(`relativePath: ${relativePath}`);
      const config = configMap[relativePath];
      console.log(`config: ${JSON.stringify(config)}`);
      if (entry.isDirectory()) {
        console.log(`isDirectory: ${fullPath}`);
        await walkAndOptimize(fullPath, configMap);
      } else if (entry.isFile() && config) {
        try {
          await processImage(fullPath, config);
        } catch (e) {
          console.warn(`⚠️  Failed to process ${relativePath}: ${e.message}`);
        }
      }
      if (entry.isDirectory()) {
        await walkAndOptimize(fullPath, configMap);
      } else if (entry.isFile() && config) {
        try {
          await processImage(fullPath, config);
        } catch (e) {
          console.warn(`⚠️  Failed to process ${relativePath}: ${e.message}`);
        }
      }
    }
  } catch (error) {
    console.error(`Error walking directory ${dir}:`, error);
  }
};

const main = async () => {
  const configArray = await readJSON(configPath);
  console.log(`configArray: ${JSON.stringify(configArray, null, 2)}`);
  const configMap = Object.fromEntries(configArray.map((c) => [c.path, c]));
  console.log(`configMap: ${JSON.stringify(configMap, null, 2)}`);
  console.log(`inputDir: ${inputDir}`);

  await walkAndOptimize(inputDir, configMap);

  await walkAndOptimize(inputDir, configMap);

  console.log("🎉 All images optimized!");
};

main().catch(console.error);
