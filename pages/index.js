import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Next.js is a React framework that gives you building blocks to create web applications.</p>
        <p>By framework, we mean Next.js handles the tooling and configuration needed for React, and provides
          additional structure, features, and optimizations for your application.</p>
          <p>What is React? React is a JavaScript library for building interactive user interfaces. By user interfaces,
            we mean the elements that users see and interact with on-screen. (Source: Next.js)</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding2rem} `}>
        <h2 className={utilStyles.headingLg}>Learn more from the blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
           <li className={utilStyles.listItem} key={id}>
           <Link href={`/posts/${id}`}>
             <a>{title}</a>
           </Link>
           <br />
           <small className={utilStyles.lightText}>
             <Date dateString={date} />
           </small>
         </li>
          ))}
        </ul>
      </section>
      <footer className="row">
            <div>
                <p>Karoliina - My First Next.js app.</p>
            </div>
            <div>
                <p>(Learn to build a site like this yourself! {' '}
          <a href="https://nextjs.org/learn">Head over to the Next.js tutorial</a>.)</p>
            </div>
        </footer>
    </Layout>
  );
}