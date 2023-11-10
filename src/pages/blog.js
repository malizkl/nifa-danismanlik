// pages/blog.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Post from './blog/[id]';

function Blog() {
  const blogPosts = [
    {
      id: 'understanding-the-mind',
      title: 'Understanding the Mind: The Journey Within',
      excerpt: 'Psychology isn\'t just a study of behavior; it\'s a gateway to the depths of human nature.',
    },
    {
      id: 'understanding-the-mind2',
      title: 'Understanding the Mind: The Journey Within',
      excerpt: 'Psychology isn\'t just a study of behavior; it\'s a gateway to the depths of human nature.',
    },
    // ...more blog posts
  ];

  return (
    <div className={styles.container}>
      <h1 className="text-gray-500 text-3xl font-bold text-center">Blog Yazılarımız</h1>
      <div className={`${styles.grid} max-w-4xl mx-auto mt-6`}>
        {blogPosts.map(post => (
          <Link key={post.id} href={`/blog/${post.id}`} passHref>
            <div className={styles.card}>
              <div className={styles.cardContent}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
