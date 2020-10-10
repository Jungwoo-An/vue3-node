import typescript, { TranspileOptions } from 'typescript';
import { SFCScriptBlock } from '@vue/compiler-sfc';

function compileScript({
  block,
  tsConfig,
}: {
  block: SFCScriptBlock;
  tsConfig: TranspileOptions;
}) {
  // TODO :: Babel
  const result = typescript.transpileModule(block.content, tsConfig);

  return result.outputText;
}

export default compileScript;
