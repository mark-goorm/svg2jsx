const svg2jsx = require('./svg2jsx');

const program = require('commander');

program
  .version('0.1.0')
  .option('-i, --image [image]', '변환할 svg가 있는 경로', './')
  .option('-p, --path [path]', '변환된 jsx가 저장될 경로', './')
  .parse(process.argv);

svg2jsx({
  svgPath: program.image,
  jsxPath: program.path
});