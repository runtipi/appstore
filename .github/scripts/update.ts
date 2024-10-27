import fs from "fs";
import path from "path";

const updateConfig = async (packageFile: string, newVersion: string) => {
  try {
    const composePath = path.join(__dirname, packageFile);
    const configPath = path.join(path.dirname(composePath), "config.json");

    const config = JSON.parse(await fs.promises.readFile(configPath, "utf8"));

    config.version = newVersion;
    config.tipi_version = config.tipi_version + 1;
    config.updated_at = new Date().getTime();

    await fs.promises.writeFile(configPath, JSON.stringify(config, null, 2));
  } catch (e) {
    console.error(`Failed to update config! Error: ${e}`);
  }
};

const packageFile = process.argv[2];
const newVersion = process.argv[3];

updateConfig(packageFile, newVersion);
