import Navigation from '@/app/dashboard/_components/Navigation';
import SpreadsheetForm from '@/app/dashboard/_components/SpreadsheetForm';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="hidden flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <SpreadsheetForm />
        </div>
        <Navigation>{children}</Navigation>
      </div>
    </div>
  );
}
