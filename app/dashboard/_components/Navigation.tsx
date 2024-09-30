'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Navigation({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname().split('/').at(-1) as string;

  return (
    <Tabs value={pathname} className="space-y-4">
      <TabsList>
        <TabsTrigger
          value="overview"
          onClick={() => router.push('/dashboard/overview')}
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="analytics"
          onClick={() => router.push('/dashboard/analytics')}
        >
          Analytics
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
}
