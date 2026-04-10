import type { Metadata } from "next";
import { AppHeader } from "@/components/app/app-header";
import { AppSidebar } from "@/components/app/app-sidebar";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[280px_1fr]">
        <AppSidebar />
        <div className="min-h-screen">
          <AppHeader />
          <main className="px-6 py-8 md:px-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
