import Link from "next/link";

export default function BlogIndex() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>JSON Lab Blog</h1>

      <p>
        Practical guides, security insights, and real-world techniques for
        working with JSON in modern web development.
      </p>

      <ul style={{ lineHeight: "1.8" }}>
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
            Effortless Data Transformation: How the JSON Mapper at JSON Lab Saves You Hours
          </Link>
        </li>
        <li>
          <Link href="/blog/plain-text-to-json">
            Beyond Brackets: Converting Plain Text into Structured JSON
          </Link>
        </li>
      </ul>
    </main>
  );
}
