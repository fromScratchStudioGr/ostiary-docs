import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ConceptFlow } from './concept-flow';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ConceptFlow,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
