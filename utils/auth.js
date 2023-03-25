const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;


// // withAuth process protects certain pages (security)
// // see activity 23 for auth.js in utils
// // helpers would live in utils directory

// // server.js for helpers to be used so connect these files in utils over there

// import {mkdirSync, writeFileSync} from "fs"

// export const createDir = (dirName, parentDir = "dist") => {
//   mkdirSync(`./${parentDir}/${dirName}`, { recursive: true });
// };

// export const createFile = (fileName, parentDir = "dist") => {
//   writeFileSync(`./${parentDir}/${fileName}`, "", { flag: "a" });
// };
