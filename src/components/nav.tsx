import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 w-full border-b border-neutral-800 bg-[#2A1810]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="font-mono text-lg hover:text-white">
            scoop
          </Link>
          <div className="space-x-6 font-mono text-sm text-neutral-400">
            <Link href="/features" className="hover:text-white">
              features
            </Link>
            <Link href="/about" className="hover:text-white">
              about
            </Link>
            <Link href="/blog" className="hover:text-white">
              blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
