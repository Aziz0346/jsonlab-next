export const metadata = {
  title: "JSON Lab – Free, Privacy-First Online JSON Editor",
  description:
    "JSON Lab is a free, privacy-first online JSON editor that runs entirely in your browser. Format, validate, map, and convert JSON without uploading your data.",
};

import JsonEditor from "../components/JsonEditor";

export default function Home() {
  return <JsonEditor />;
}
