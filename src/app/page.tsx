export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <h1 className="font-heading text-5xl text-center text-black dark:text-zinc-50">
          Welcome to FD Restaurant
        </h1>
        <p className="font-body text-xl text-center text-zinc-600 dark:text-zinc-400 max-w-lg">
          This project is set up with Forum (heading) and Satoshi (body) fonts,
          shadcn/ui components, and Framer Motion for animations.
        </p>
        <div className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-500">
          <p>
            <span className="font-heading">font-heading</span> - Forum (Google Fonts)
          </p>
          <p>
            <span className="font-body">font-body</span> - Satoshi (Local Font)
          </p>
        </div>
      </main>
    </div>
  );
}
