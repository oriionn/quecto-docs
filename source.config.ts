import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import {rehypeCode, rehypeToc, remarkHeading} from "fumadocs-core/mdx-plugins";

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  remarkPlugins: [remarkHeading, rehypeCode, rehypeToc],
  lastModifiedTime: 'git'
});
