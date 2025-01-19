import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import {rehypeCode, rehypeCodeDefaultOptions, rehypeToc, remarkHeading} from "fumadocs-core/mdx-plugins";
import {transformerTwoslash} from "fumadocs-twoslash";

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  // @ts-ignore
  remarkPlugins: [remarkHeading, rehypeCode, rehypeToc],
  lastModifiedTime: 'git',
  mdxOptions: {
    rehypeCodeOptions: {
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],
    },
  }
});
