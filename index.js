const fs = require('fs');
const path = require('path');
const svg2jsx = require('@balajmarius/svg2jsx');

const template = ({ fileName, svgData }) => {
  return `import React from 'react';
import PropTypes from 'prop-types';
import IconBase from 'react-icon-base';

function ${fileName}(props) {
  return (
    ${svgData}
  );
}

${fileName}.defaultProps = {
  size: '1rem',
  color: 'currentColor',
  onClick: () => {},
  style: {},
};

${fileName}.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(PropTypes.string),
};

export default ${fileName};`;
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

fs.readdir('./images', (err, files) => {
  files.forEach(async filePath => {
    const fileName = capitalizeFirstLetter(filePath.split('.')[0]);
    const data = fs.readFileSync(`./images/${filePath}`, 'utf8');
    const transformedSVG = await svg2jsx(data);
    fs.writeFileSync(
      `./results/${fileName}.jsx`,
      template({
        fileName,
        svgData: transformedSVG
          .replace('<svg', '<IconBase {...props}')
          .replace('</svg>', '</IconBase>')
      })
    );
    console.log(filePath);
  });
});