const convertSvgToGrmJsx = require('./convertSvgToGrmJsx.js');
const fs = require('fs');

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

fs.readdir('./images', (err, files) => {
  files.forEach(async filePath => {
    const fileName = capitalizeFirstLetter(filePath.split('.')[0]);
    const svgData = fs.readFileSync(`./images/${filePath}`, 'utf8');
    const grmJsx = await convertSvgToGrmJsx({ fileName, svgData });
    fs.writeFileSync(
      `./results/${fileName}.jsx`,
      grmJsx
    );
    console.log(filePath);
  });
});