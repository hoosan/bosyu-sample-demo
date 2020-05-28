import Head from 'next/head'
import { Layout } from "../components/layout";
import { Hero } from "../components/home/hero";
import { Feature } from "../components/home/feature";
import { Member } from "../components/home/member";
import { News } from "../components/news";

export default function Home({ member, news }) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Feature />
      <Member member={member} />
      <News news={news} />
    </Layout>
  )
}

// export const getStaticProps = async () => {
//   const key = {
//     headers: {'X-API-KEY': process.env.API_KEY}
//   };
  
//   const member_res = await fetch('https://bosyusample2.microcms.io/api/v1/member', key)
//   const member = await member_res.json();

//   console.log(member);

//   return {
//     props: {
//       member: member.contents
//     }
//   }
// }

export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY}
  };

  const member_res = await fetch('https://bosyusample2.microcms.io/api/v1/member', key)
  const news_res = await fetch('https://bosyusample2.microcms.io/api/v1/news', key)

  const member = await member_res.json();
  const news = await news_res.json();

  console.log(news);

  return {
    props: {
      member: member.contents,
      news: news.contents
    }
  }
} 