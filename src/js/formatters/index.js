import genStylishOutput from './stylish.js';
import genPlainOutput from './plain.js';
import genJsonOutput from './json.js';

const genOutput = (internalStructure, format) => {
  switch (format) {
    case 'stylish':
      return genStylishOutput(internalStructure);
    case 'plain':
      return genPlainOutput(internalStructure);
    case 'json':
      return genJsonOutput(internalStructure);
    default: return 'Error. Please, enter correct format name.';
  }
};

export default genOutput;
