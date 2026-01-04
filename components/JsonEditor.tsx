"use client";

import { useState } from "react";

export default function JsonEditor() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  function formatJson() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (err) {
      setOutput("Invalid JSON");
    }
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "900px" }}>
      <h1>JSON Lab</h1>
      <p>
        A free, privacy-first JSON editor that runs entirely in your browser.
        All processing happens locally — your data never leaves your device.
      </p>

      <textarea
        placeholder="Paste your JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          marginTop: "1rem",
          fontFamily: "monospace",
        }}
      />

      <button
        onClick={formatJson}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          cursor: "pointer",
        }}
      >
        Format JSON
      </button>

      <textarea
        placeholder="Formatted output will appear here..."
        value={output}
        readOnly
        style={{
          width: "100%",
          height: "200px",
          marginTop: "1rem",
          fontFamily: "monospace",
          backgroundColor: "#f9f9f9",
        }}
      />
    </main>
  );
}
