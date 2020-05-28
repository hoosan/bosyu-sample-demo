import { Layout } from '../../components/layout';
import { Meta } from '../../components/meta';

const NewsId = ({ news }) => {
  return (
    <Layout>
      <Meta title={news.title} description={news.description} image={news.image.url} />
      <div className="main">
        <div className="main_container">
          <div className="category">{news.category}</div>
          <h1>{news.title}</h1>
          <div className="author">
            <img src={news.author.image.url} />
            <span>{news.author.name}</span>
          </div>
          <img
            src={news.image.url}
            alt="ニュースイメージ"
            className="img-fuild"
          />
          <div className="description">{news.description}</div>
          <div className="content">
            <div
              dangerouslySetInnerHTML={{
                __html: `${news.body}`,
              }}
            />
          </div>
        </div>
      </div>
      <style jsx global>{`
        .main h1 {
          font-size: 42px;
          font-weight: 900;
          color: #333;
        }

        .main_container {
          max-width: 660px;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin: 0 auto;
        }

        .author {
          display: flex;
          align-items: center;
          margin-bottom: 24px;
        }
        span {
          font-size: 16px;
        }

        .author img {
          width: 32px;
          height: 32px;
          border-radius: 100%;
          margin-right: 12px;
        }
        .img-fuild {
          width: 100%;
        }

        .description {
          margin-top: 24px;
        }
      `}</style>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY}
  };

  const res = await fetch('https://bosyusample2.microcms.io/api/v1/news', key)
  const repos = await res.json();

  const paths = repos.contents.map(repo => `/news/${repo.id}`);

  return {paths, fallback: false};
}

export const getStaticProps = async context => {
  const id = context.params.id;

  const key = {
    headers: {'X-API-KEY': process.env.API_KEY}
  };

  const res = await fetch('https://bosyusample2.microcms.io/api/v1/news/' + id, key)
  const news = await res.json();

  return {
    props: {
      news,
    }
  }
}

export default NewsId;