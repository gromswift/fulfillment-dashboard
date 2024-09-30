import { TabsContent } from '@/components/ui/tabs';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TabsContent value="analytics" className="space-y-4">
      {children}
    </TabsContent>
  );
}
