export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <article style={{ padding: "2rem" }}>
      <h1>{params.slug.replace(/-/g, " ")}</h1>
      <p>
        This article explains {params.slug}. Replace this with 500–800 words
        of real educational content.
      </p>
    </article>
  );
}
