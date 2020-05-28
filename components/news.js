import Link from 'next/link';
import {formatDate} from '../utils/format-date';

export const News = ({news}) => (
  <div className="section">
    <div className="container">
      <div className="mt3">
        <div className="center">
          <h2 className="section__title">
            News<span className="primary">.</span>
          </h2>
        </div>
      </div>

      <div className="row">
        {news.map(res => (
          <React.Fragment key={res.id}>
            <div className="card">
              <div className="entry">
                <img src={res.image.url} alt="Image" className="entry__img" />
                <h2 className="entry__title">
                  <Link href="/news/[id]" as={`news/${res.id}`}>
                    <a>{res.title}</a>
                  </Link>
                </h2>
                <div className="meta">
                  {res.author.name} / {formatDate(`${res.createdAt}`)}
                  <a>{res.category}</a>
                </div>
                <p>
                  <Link
                    href="/news/[id]"
                    as={`news/${res.id}`}
                    >
                    <a className="more">続きをみる</a>
                  </Link>
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
    <style jsx>{`
      .card {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
      }

      @media (max-width: 600px) {
        .card {
          flex: 100%;
          max-width: 100%;
        }
      }

      .entry__img {
        max-width: 100%;
        height: auto;
        margin-bottom: 30px;
      }

      .entry__title {
        font-size: 20px;
        margin-bottom: 0.5rem;
      }

      .entry h2 a {
        color: #000;
        font-size: 30px;
        text-decoration: none;
      }

      .more {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      .meta {
        color: #b3b3b3;
        font-size: 14px;
        margin-bottom: 1.5rem !important;
      }
    `}</style>
  </div>
);
