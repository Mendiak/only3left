export default function PatternLoading() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
      <div className="animate-pulse">
        <div className="h-3 w-32 rounded bg-white/10" />
        <div className="mt-4 h-12 w-3/4 rounded bg-white/10" />
        <div className="mt-6 h-6 w-full rounded bg-white/10" />
      </div>

      <div className="mt-10 space-y-4 animate-pulse">
        <div className="h-6 w-40 rounded bg-white/10" />
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-5/6 rounded bg-white/10" />
        <div className="h-4 w-4/6 rounded bg-white/10" />
      </div>

      <div className="mt-10 space-y-4 animate-pulse">
        <div className="h-6 w-40 rounded bg-white/10" />
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-3/4 rounded bg-white/10" />
      </div>

      <div className="mt-10 space-y-3 animate-pulse">
        <div className="h-6 w-40 rounded bg-white/10" />
        <div className="flex flex-wrap gap-2">
          <div className="h-8 w-24 rounded bg-white/10" />
          <div className="h-8 w-32 rounded bg-white/10" />
          <div className="h-8 w-20 rounded bg-white/10" />
        </div>
      </div>

      <div className="mt-10 space-y-4 animate-pulse">
        <div className="h-6 w-48 rounded bg-white/10" />
        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-5/6 rounded bg-white/10" />
        <div className="h-4 w-4/6 rounded bg-white/10" />
      </div>

      <div className="mt-10 space-y-4 animate-pulse">
        <div className="h-6 w-40 rounded bg-white/10" />
        <div className="h-20 w-full rounded bg-white/10" />
      </div>
    </main>
  );
}
