// withAuth process protects certain pages (security)
// see activity 23 for auth.js in utils
// helpers would live in utils directory

// server.js for helpers to be used so connect these files in utils over there

import {mkdirSync, writeFileSync} from "fs"

export const createDir = (dirName, parentDir = "dist") => {
  mkdirSync(`./${parentDir}/${dirName}`, { recursive: true });
};

export const createFile = (fileName, parentDir = "dist") => {
  writeFileSync(`./${parentDir}/${fileName}`, "", { flag: "a" });
};
