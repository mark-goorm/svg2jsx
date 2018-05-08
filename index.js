const fs = require('fs');
const path = require('path');
const svg2jsx = require('@balajmarius/svg2jsx');

fs.readdir('./images', (err, files) => {
  files.forEach(async (filePath) => {
    const fileName = filePath.split('.')[0];
    const data = fs.readFileSync(`./images/${filePath}`, 'utf8');
    const transformedSVG = await svg2jsx(data);
    fs.writeFileSync(`./results/${fileName}.jsx`, transformedSVG.replace('<svg', '<IconBase {...props}').replace('</svg>', '</IconBase>'));
    console.log(filePath);
  });
})
