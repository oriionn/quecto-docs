import './global.css';
import 'fumadocs-twoslash/twoslash.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { I18nProvider } from "fumadocs-ui/i18n";

const inter = Inter({
  subsets: ['latin'],
});

export default async function Layout({ params, children }: { params: Promise<{ lang: string }>, children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
              <I18nProvider locale={(await params).lang} locales={[
                  { locale: 'en', name: 'English' },
                  { locale: "fr", name: "Français" }
              ]}>
                <RootProvider>{children}</RootProvider>
              </I18nProvider>
          </body>
    </html>
  );
}
