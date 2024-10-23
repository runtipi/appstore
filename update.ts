import { exec as execCallback } from "child_process";
import { promisify } from "util";
import fs from "fs";
import path from "path";

const exec = promisify(execCallback);

const updateConfig = async () => {
  try {
    const { stdout, stderr } = await exec(`git diff --name-only`);

    if (stderr) {
      console.error(`Failed to get changed files! Error: ${stderr}`);
      return;
    }

    const splittedPath = stdout.trim().split("/");
    const appId = splittedPath[splittedPath.length - 2];
    const configPath = path.join("apps", appId, "config.json");
    const compose = JSON.parse(
      await fs.promises.readFile(stdout.trim(), "utf8")
    );
    let newVersion: string = "";

    for (const service of compose.services) {
      if (appId == service.name) {
        newVersion = service.image.split(":")[1];
      }
    }

    const config = JSON.parse(await fs.promises.readFile(configPath, "utf8"));

    config.version = newVersion;
    config.tipi_version = config.tipi_version + 1;
    config.updated_at = new Date().getTime();

    await fs.promises.writeFile(configPath, JSON.stringify(config, null, 2));
  } catch (e) {
    console.error(`Failed to update config! Error: ${e}`);
  }
};

updateConfig();
