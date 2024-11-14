import Particles from "~/components/ui/particles";

export const metadata = {
  title: "blog",
  description: "news and updates from scoop",
};

export default function BlogPage() {
  return (
    <div className="relative">
      <Particles />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        coming soon
      </span>
    </div>
  );
}
