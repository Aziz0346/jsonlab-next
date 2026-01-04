import Link from "next/link";
import JsonEditor from "@/components/JsonEditor";

export const metadata = {
  title: "JSON Lab – Online JSON Editor, Formatter & Validator",
  description:
    "A free, privacy-first JSON editor that works 100% locally in your browser. Format, validate, convert, and visualize JSON without uploads.",
};

export default function Home() {
  return (
    <main className="bg-[#0b0f19] text-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 text-sm mb-6">
          🔒 100% Local Processing · No Uploads · No Tracking
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Online JSON Editor, Formatter & Validator
        </h1>

        <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto">
          A free, privacy-first JSON editor with powerful tools to format,
          validate, compare, and visualize JSON — all inside your browser.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="#editor"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-medium"
          >
            Open Editor →
          </Link>
          <Link
            href="/blog"
            className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20"
          >
            View Features
          </Link>
        </div>
      </section>

      {/* EDITOR PREVIEW */}
      <section id="editor" className="max-w-6xl mx-auto px-6 mt-20">
        <div className="rounded-xl border border-white/10 bg-black/40 p-4">
          <JsonEditor />
        </div>
      </section>

      {/* PRIVACY FIRST */}
      <section className="max-w-6xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Privacy-First JSON Editor — Works 100% Locally
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Feature title="Works Offline">
            Everything runs in your browser — even without internet.
          </Feature>
          <Feature title="No Data Uploads">
            Your JSON never leaves your device. Ever.
          </Feature>
          <Feature title="No Login Required">
            No accounts, no tracking, no hidden collection.
          </Feature>
        </div>
      </section>

      {/* MODES */}
      <section className="max-w-7xl mx-auto px-6 mt-28">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Format and Validate JSON Instantly
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card title="Simple Mode">
            Quick formatting, validation, and readability for beginners.
          </Card>
          <Card title="Edit Mode">
            Advanced editor with schema validation and diff comparison.
          </Card>
          <Card title="Visual Mode">
            Tree & table views to explore complex JSON structures.
          </Card>
        </div>
      </section>

      {/* CONVERSION */}
      <section className="max-w-6xl mx-auto px-6 mt-28 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Convert JSON to CSV, XML, YAML and More
        </h2>
        <p className="text-white/70 mb-8">
          Instantly transform JSON into formats used by spreadsheets, legacy
          systems, and configuration files.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {["JSON → CSV", "JSON → XML", "JSON → YAML", "Minify", "Beautify"].map(
            (x) => (
              <span
                key={x}
                className="px-4 py-2 rounded-full bg-white/10 text-sm"
              >
                {x}
              </span>
            )
          )}
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="max-w-7xl mx-auto px-6 mt-28">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Who Is JSON Lab For?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          <Audience title="Developers">
            Debug APIs, configs, and responses faster.
          </Audience>
          <Audience title="Students">
            Learn JSON structure through visual feedback.
          </Audience>
          <Audience title="Data Analysts">
            Convert and inspect datasets with ease.
          </Audience>
          <Audience title="Security-Conscious Users">
            Handle sensitive data without uploads.
          </Audience>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 mt-28">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <FAQ q="Is it safe to paste sensitive JSON data?">
          Yes. Everything runs locally in your browser. No data is sent anywhere.
        </FAQ>
        <FAQ q="Does JSON Lab work offline?">
          Yes. Once loaded, it works without an internet connection.
        </FAQ>
        <FAQ q="What formats can I convert JSON to?">
          CSV, XML, YAML, and more.
        </FAQ>
      </section>

      {/* FINAL CTA */}
      <section className="text-center mt-28 pb-32">
        <h2 className="text-3xl font-semibold mb-4">Ready to Edit JSON?</h2>
        <p className="text-white/70 mb-6">
          No sign-up. No installation. Just secure JSON editing.
        </p>
        <Link
          href="#editor"
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500"
        >
          Open Editor →
        </Link>
      </section>
    </main>
  );
}

/* --- SMALL COMPONENTS --- */

function Feature({ title, children }: any) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{children}</p>
    </div>
  );
}

function Card({ title, children }: any) {
  return (
    <div className="p-6 rounded-xl bg-white/5 border border-white/10">
      <h3 className="font-semibold mb-3">{title}</h3>
      <p className="text-white/70">{children}</p>
    </div>
  );
}

function Audience({ title, children }: any) {
  return (
    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{children}</p>
    </div>
  );
}

function FAQ({ q, children }: any) {
  return (
    <div className="mb-4 p-4 rounded-xl bg-white/5 border border-white/10">
      <p className="font-medium">{q}</p>
      <p className="text-white/70 mt-2">{children}</p>
    </div>
  );
}
