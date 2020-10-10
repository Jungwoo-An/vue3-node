import typescript, { TranspileOptions } from 'typescript';
import {
  compileTemplate as compile,
  SFCTemplateBlock,
} from '@vue/compiler-sfc';

function compileTemplate({
  block,
  filename,
  tsConfig,
}: {
  block: SFCTemplateBlock;
  filename: string;
  tsConfig: TranspileOptions;
}) {
  const template = compile({
    source: block.content,
    filename,
  });

  const result = typescript.transpileModule(template.code, tsConfig);

  return result.outputText;
}

export default compileTemplate;
