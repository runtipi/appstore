import fs from "fs";
import path from "path";
import semver from "semver";

const updateConfig = async (changedFile: string) => {
  try {
    const appId = changedFile.split("/")[1];
    const cwd = process.cwd();

    const composePath = path.join(cwd, "apps", appId, "docker-compose.json");
    const configPath = path.join(path.dirname(composePath), "config.json");

    const compose = JSON.parse(await fs.promises.readFile(composePath, "utf8"));

    var newVersion: string = "";

    for (const service of compose.services) {
      if (service.name === appId) {
        newVersion = service.image.split(":")[1];
        break;
      }
    }

    const config = JSON.parse(await fs.promises.readFile(configPath, "utf8"));

    const currentVersion = config.version;

    config.version = newVersion;
    config.tipi_version = config.tipi_version + 1;
    config.updated_at = new Date().getTime();

    await fs.promises.writeFile(configPath, JSON.stringify(config, null, 2));

    if (semver.valid(currentVersion) && semver.valid(newVersion)) {
      if (semver.major(newVersion) > semver.major(currentVersion)) {
        console.log('{"auto_merge":false}');
        return;
      } else {
        console.log('{"auto_merge":true}');
        return;
      }
    }

    console.log('{"auto_merge":false}');
  } catch (e) {
    throw `Failed to update config! Error: ${e}`;
  }
};

const changedFile = process.argv[2];

updateConfig(changedFile);
