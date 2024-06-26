// Getting information from path
const path = require("node:path");
const notes = "../notes.txt";

const dirname = path.dirname(notes);
const basename = path.basename(notes);
const extname = path.extname(notes);

console.log(`Directory Name: ${dirname} \nBase Name: ${basename} \nExtension Name: ${extname}`);

// Reading file with node

const fs = require("node:fs");

fs.readFile("../notes.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

// Writing file with node

const content = "Some content!";

fs.writeFile("../notes.txt", content, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
        // file written successfully
    }
});