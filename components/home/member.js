import Link from 'next/link';

export const Member = ({member}) => (
  <div className="section">
    <div className="container">
      <div className="mt3">
        <div className="center">
          <h2 className="section__title">
            Member<span className="primary">.</span>
          </h2>
          <p className="lead">私たちのメンバーについて紹介します。</p>
        </div>
      </div>

      <div className="row">
        {member.map(res => (
          <React.Fragment key={res.id}>
            <div className="card">
              <div className="person">
                <div className="bio-img">
                  <figure>
                    <img src={res.image.url} alt="Image" className="img-full" />
                  </figure>
                </div>
                <h2 className="name">{res.name}</h2>
                <span className="position">{res.position}</span>
                <p className="description">{res.description}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
    <style jsx>{`
      .card {
        position: relative;
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        display: flex;
        flex-wrap: wrap;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
      }

      @media (max-width: 600px) {
        .card {
          flex: 100%;
          max-width: 100%;
        }
      }

      .bio-img {
        position: relative;
        text-align: center;
        overflow: hidden;
        margin-bottom: 30px;
      }

      .name {
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      .description {
        margin-top: 0;
        margin-bottom: 1rem;
      }

      .position {
        display: block;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 12px;
        font-weight: 700;
        color: #4285f4;
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);
