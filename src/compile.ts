import { TranspileOptions } from 'typescript';
import { parse } from '@vue/compiler-sfc';

import compileScript from './compile-script';
import compileTemplate from './compile-template';

function compile({
  source,
  filename,
  tsConfig,
}: {
  source: string;
  filename: string;
  tsConfig: TranspileOptions;
}) {
  const { descriptor, errors } = parse(source, {
    // TODO :: Sourcemap
    sourceMap: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.join('\n'));
  }

  const compiledScript = descriptor.script
    ? compileScript({
        block: descriptor.script,
        tsConfig,
      })
    : '';

  const compiledTemplate = descriptor.template
    ? compileTemplate({
        block: descriptor.template,
        filename,
        tsConfig,
      })
    : '';

  return `
    ${compiledScript};
    ${compiledTemplate};
    exports.default.render = render;
    module.exports = {
      ...exports.default,
    };
  `;
}

export default compile;
