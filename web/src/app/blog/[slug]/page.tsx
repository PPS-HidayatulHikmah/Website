import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { POSTS } from "../page";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = await import(`@/content/blog/${slug}.mdx`);
    return { title: meta.title, description: meta.excerpt };
  } catch {
    return { title: "Artikel" };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const info = POSTS.find((p) => p.slug === slug);
  if (!info) notFound();

  let Post: React.ComponentType;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    Post = mod.default;
  } catch {
    notFound();
  }

  return (
    <>
      <div className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Beranda</Link> / <Link href="/blog">Blog</Link> /{" "}
            {info.category}
          </div>
          <h1 style={{ fontSize: "clamp(30px,3.6vw,44px)" }}>{info.title}</h1>
        </div>
      </div>
      <section className="block">
        <div className="wrap">
          <article className="article">
            <div className="article-meta">
              <span className="pill">{info.category}</span>
              <span>{info.date}</span>
              <span>•</span>
              <span>Redaksi Ponpes Hidayatul Hikmah</span>
            </div>
            <div className="article-body">
              <Post />
            </div>
            <div style={{ marginTop: 48 }}>
              <Link className="btn btn-ghost" href="/blog">
                ← Kembali ke Blog
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
