import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
      <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
        <div className="w-[108rem] flex-none flex justify-end">
          <picture>
            <img
              src="/assets/images/docs.png"
              alt=""
              className="w-[71.75rem] flex-none max-w-none dark:hidden"
              decoding="async"
            />
          </picture>
          <picture>
            <img
              src="/assets/images/docs-dark.png"
              alt=""
              className="w-[90rem] flex-none max-w-none hidden dark:block"
              decoding="async"
            />
          </picture>
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="min-h-screen max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8">
          <Sidebar />
          <div className="lg:pl-[19.5rem] pt-20">
            <main className="max-w-3xl mx-auto relative z-20 mt-20 lg:mt-10 xl:max-w-none">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
