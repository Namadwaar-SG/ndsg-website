const fs = require("fs");

const raw = fs.readFileSync(
  "ndsg-website-firebase-adminsdk-fbsvc-c6874efecf.json",
  "utf-8"
);
const obj = JSON.parse(raw);
obj.private_key = obj.private_key.replace(/\n/g, "\\n");
console.log(JSON.stringify(obj));
