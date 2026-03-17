import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">INDEX</h1>
        <p className="max-w-2xl leading-relaxed">
          Welcome to this repository. This site serves as a minimalist archive for
          professional work and creative writing.
        </p>
      </section>

      <div className="border border-foreground p-4">
        <h2 className="text-xl font-bold mb-4 uppercase">Directories</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/portfolio" className="hover:bg-foreground hover:text-background px-1">
              dir  portfolio/
            </Link>
          </li>
          <li>
            <Link href="/writing" className="hover:bg-foreground hover:text-background px-1">
              dir  writing/
            </Link>
          </li>
        </ul>
      </div>

      <div className="border border-foreground p-4">
        <h2 className="text-xl font-bold mb-4 uppercase">System Info</h2>
        <pre className="text-sm">
          USER: guest<br />
          HOST: creative-space<br />
          STATUS: active<br />
          VERSION: 1.0.0
        </pre>
      </div>
    </div>
  );
}
