const fs = require("fs");
const path = require('path');
const BASEDIR = process.cwd();
const { FOLDERS } = require(`${BASEDIR}/constants/folders.js`);
const { NFT_DETAILS } = require(`${FOLDERS.constantsDir}/nft_details.js`);

if (!fs.existsSync(`${FOLDERS.revealJSONDir}`)) {
    fs.mkdirSync(`${FOLDERS.revealJSONDir}`);
}

fs.readdir(`${FOLDERS.jsonDir}`, handleFiles);

function handleFiles (err, files) {
    console.log({err})
    if (err) throw err;
    let i;
    const jsonFilePattern=/\.[json]+$/i;
    let fileName;
    let filePath;
    for (i = 0; i < files.length; ++i) {
        fileName = files[i];
        console.log({fileName})
        // Check if the file has a .json extension
        if (fileName.match(jsonFilePattern)) {
            filePath = `${FOLDERS.jsonDir}` + '/' + fileName;
            // Open the file as utf-8 and call handleJsonFile back
            // when done reading.
            const jsonFile = fs.readFileSync(filePath)

            const nftDetails = JSON.parse(jsonFile)

            let shortName = fileName.replace(
                /\.[^/.]+$/,
                ""
            );

            const newDetails = {
                ...nftDetails,
                namePrefix: NFT_DETAILS.namePrefix,
                image: `${NFT_DETAILS.imageFilesBase}/${shortName}.png`,
                description: NFT_DETAILS.description,
            }



            fs.writeFileSync(
                `${FOLDERS.revealJSONDir}/${shortName}.json`,
                JSON.stringify(newDetails, null, 2)
            );
        }
    }
}


