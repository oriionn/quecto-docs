import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { createOpenAPI } from "fumadocs-openapi/server";
import { attachFile } from 'fumadocs-openapi/server';
import { i18n } from "./i18n";

export const source = loader({
    baseUrl: '/docs',
    source: createMDXSource(docs, meta),
    pageTree: {
        attachFile
    },
    i18n: i18n
});

export const openapi = createOpenAPI();
