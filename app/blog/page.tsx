import Link from "next/link";

export const metadata = {
  title: "JSON Lab Blog – Practical Guides for Working with JSON",
  description:
    "Practical guides, security insights, and real-world techniques for working with JSON in modern web development.",
};

export default function BlogIndex() {
  return (
    <main
      style={{
        padding: "2rem",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: "1.7",
      }}
    >
      <header>
        <h1>JSON Lab Blog</h1>
        <p>
          Practical guides, security insights, and real-world techniques for
          working with JSON in modern web development.
        </p>
      </header>

      <section aria-labelledby="articles-heading">
        <h2 id="articles-heading" style={{ marginTop: "2rem" }}>
          Articles
        </h2>

        <ul style={{ marginTop: "1rem", lineHeight: "1.9" }}>
          <li>
            <Link href="/blog/local-json-formatting-security">
              Why Local JSON Formatting Is Safer for Modern Developers
            </Link>
          </li>

          <li>
            <Link href="/blog/json-validation-guide">
              Mastering JSON Schema: Why Validation Is the Key to Scalable APIs
            </Link>
          </li>

          <li>
            <Link href="/blog/json-mapper-guide">
              Effortless Data Transformation: How the JSON Mapper at JSON Lab
              Saves You Hours
            </Link>
          </li>

          <li>
            <Link href="/blog/plain-text-to-json">
              Beyond Brackets: Converting Plain Text into Structured JSON
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
