import { TabsContent } from '@/components/ui/tabs';

export default function OverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TabsContent value="overview" className="space-y-4">
      {children}
    </TabsContent>
  );
}
