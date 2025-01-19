import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default async function Layout({ params, children }: { params: Promise<{lang: string}>, children: ReactNode }) {
  return (
    <DocsLayout tree={source.pageTree[(await params).lang]} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
