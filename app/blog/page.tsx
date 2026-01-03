import Link from "next/link";

export default function BlogIndex() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Blog</h1>
      <ul>
        <li><Link href="/blog/json-vs-xml">JSON vs XML</Link></li>
        <li><Link href="/blog/json-syntax-errors">Common JSON Syntax Errors</Link></li>
        <li><Link href="/blog/json-to-csv">Convert JSON to CSV</Link></li>
      </ul>
    </main>
  );
}
