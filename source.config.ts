import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import {rehypeToc, remarkHeading} from "fumadocs-core/mdx-plugins";

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [[remarkHeading, { generateToc: false }]]
  }
});
