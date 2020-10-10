import fs from 'fs';

import { TranspileOptions } from 'typescript';

import compile from './compile';

function register({
  tsConfig,
  tsConfigPath,
}: {
  tsConfig?: TranspileOptions;
  tsConfigPath?: string;
}) {
  const tsConfigContent: TranspileOptions =
    tsConfig ??
    (tsConfigPath &&
      JSON.parse(fs.readFileSync(tsConfigPath, { encoding: 'utf8' }))) ??
    {};

  require.extensions['.vue'] = (module: any, filename) => {
    const source = fs.readFileSync(filename, { encoding: 'utf8' });

    const compiledContent = compile({
      tsConfig: tsConfigContent,
      source,
      filename,
    });

    return module._compile(compiledContent, filename);
  };
}

export default register;
