export const Feature = () => (
  <div className="section">
    <div className="container">
      <div className="mt3">
        <div className="center">
          <h2 className="section__title">
            Feature<span className="primary">.</span>
          </h2>
          <p className="lead">私たちのビジネスの特徴を紹介します。</p>
        </div>
      </div>
      <div className="row">
        <div className="box">
          <div className="unit-4">
            <div>
              <h3>簡単に作成</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="unit-4">
            <div>
              <h3>運用コストが低い</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="unit-4">
            <div>
              <h3>簡単に作成</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis quis molestiae vitae eligendi at.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .row {
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
      }

      .box {
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
        .box {
          flex: 100%;
          max-width: 100%;
        }
      }

      .unit-4 {
        padding: 30px;
        background-color: #f1f1f1;
        border-radius: 5px;
        position: relative;
        top: 0;
        margin-bottom: 4em;
        text-align: center;
        padding-top: 50px;
      }

      h3 {
        font-size: 18px;
        color: #000;
        margin-bottom: 0.5rem;
        font-weight: 700;
        line-height: 1.2;
      }

      p {
        font-weight: 300;
        margin-top: 0;
        margin-bottom: 1rem;
      }
    `}</style>
  </div>
);
