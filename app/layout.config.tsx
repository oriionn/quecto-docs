import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Logo from "../public/logo.png";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    nav: {
        // can be JSX too!
        title: <Image src={Logo} alt="quecto" height={30} />,
    },
    links: [
        {
            text: 'Documentation',
            url: '/docs',
            active: 'nested-url',
        },
        {
            text: "Demo",
            url: "https://s.oriondev.fr",
            external: true
        }
    ],
    githubUrl: "https://github.com/oriionn/quecto",
    i18n: true
};
