import styles from "./page.module.css";
import prisma from "../lib/prisma";
import Post from "./components/Post/Post";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}
export const dynamic = "force-dynamic";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <Link href="/add-post">Add Post</Link>
      <h1 className={styles.title}>Feed</h1>
      <div className={styles.posts}>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
            />
          );
        })}
      </div>
    </main>
  );
}
