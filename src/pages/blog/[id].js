// pages/blog/[id].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked'; // Make sure you've installed `marked` with npm or yarn
import styles from '../../styles/Home.module.css';

// Adjust the path to match your markdown files' location
const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export const getStaticPaths = async () => {
  const files = fs.readdirSync(postsDirectory);

  const paths = files.map((filename) => ({
    params: { id: filename.replace('.md', '') },
  }));

  return {
    paths,
    fallback: false, // Set to 'blocking' if you want to server-render pages on-demand
  };
};

export const getStaticProps = async ({ params }) => {
  const fullPath = path.join(postsDirectory, `${params.id}.md`);
  const markdownWithMeta = fs.readFileSync(fullPath, 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);

  const htmlContent = marked(content); // Convert markdown to HTML

  return {
    props: {
      frontMatter,
      content: htmlContent, // Pass HTML content to the component
    },
  };
};

const Post = ({ content, frontMatter }) => {
  return (
    <div className={styles.container}>
      <article className={styles.blogContent}>
        <h1>{frontMatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </div>
  );
};

export default Post;
