// changedetection-data/url-watches.json

const fs = require("fs");
const path = require("path");
const now = new Date().toISOString().replace(/[:.]/g, "");
const backupPath = path.resolve(
  __dirname,
  "/datastore/url-watches.json." + now + ".bak"
);

try {
  fs.copyFileSync("/datastore/url-watches.json", backupPath);
  console.log("Backup created:", backupPath);
} catch (error) {
  if (error.code === "EXIST") {
    console.log("Backup file already exists, overwriting:", backupPath);
    fs.copyFileSync("/datastore/url-watches.json", backupPath);
  } else {
    console.error("Error creating backup:", error);
  }
}

let generatedJson = {};
let currentJson = {};

const scheduleFilePath = path.resolve("/app/_notes/Schedule.json");
const currentJsonPath = path.resolve("/datastore/url-watches.json");

(async () => {
  try {
    const generatedJsonRaw = await fs.promises.readFile(
      scheduleFilePath,
      "utf8"
    );
    const currentJsonRaw = await fs.promises.readFile(currentJsonPath, "utf8");

    generatedJson = JSON.parse(generatedJsonRaw);
    currentJson = JSON.parse(currentJsonRaw);
    updatedJson = currentJson;

    updatedJson["watching"] = generatedJson["watching"];
    console.log(updatedJson);

    await fs.promises.writeFile(
      currentJsonPath,
      JSON.stringify(updatedJson, null, 1)
    );
    console.log("Updated JSON file written successfully!");
  } catch (err) {
    console.error("Error parsing JSON file:", err);
  }
})();
