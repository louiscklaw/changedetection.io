const fs = require("fs");
const csv = require("csv-parser");
const csv_content = {};

console.log("start");

fs.createReadStream("Schedule.csv", { encoding: "utf-8" })
  .pipe(csv())
  .on("data", (data) => {
    let temp = data.title.replace(/ /g, "_").replace(/@/g, "");
    // temp = temp.replace(/[^\x00-\x7F]/g, function (match) {
    //   return "\\u" + ("0000" + match.charCodeAt(0).toString(16)).slice(-4);
    // });
    temp = temp.replace(/\\/g, "_");
    temp = temp.replace(/\//g, "_");
    console.log({ temp });
    csv_content[temp] = data;
  })
  .on("end", () => {
    let result = { watching: csv_content };

    for (const [key1, value] of Object.entries(csv_content)) {
      Object.keys(value).forEach((key) => {
        // fill all empty string to null
        if (value[key] == "") value[key] = null;

        // as filled above, the compare should be null here
        if (value["uuid"] == null) value["uuid"] = key1;
      });

      value["tags"] = value["tags"].split(",");

      value["paused"] = value["paused"] == "TRUE" ? true : false;

      value["body"] = JSON.stringify({
        url: value["link_to_site"],
        wait_before_read_s: 10,
        replace_filter: [
          "\n",
          "^ +$",
          "^.*ago$",
          "^.*views$",
          "^.*Now playing$",
          "^\\d+:\\d+$",
          "^\\d+:\\d+:\\d+$",
        ],
      });
      value["content_type"] = "application/json; charset=utf-8";
      value["headers"] = { "Content-Type": "application/json" };
      value["include_filters"] = [
        "json:$.results.uniq_result",
        "json:$.request_body.url",
      ];
    }

    const stringified = JSON.stringify(result, null, 1);
    fs.writeFile(
      //
      "Schedule.json",
      stringified,
      "utf8",
      () => console.log("Done")
    );
  });
