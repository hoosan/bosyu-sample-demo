export const Hero = () => (
  <div className="hero">
    <div className="container">
      <div className="hero__mt">
        <h1 className="hero__title">Company page demo</h1>
        <p className="hero__sub">
          これはNext.js + microCMSのカンパニーページのデモです。
        </p>
        <div>
          <a href="/" className="hero__btn">
            ご相談はこちらから
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      .hero {
        position: relative;
      }

      .hero__mt {
        margin-top: 32px;
      }

      .hero__title {
        font-size: 3.5rem;
        color: #000;
        font-weight: 900;
      }

      .hero__sub {
        color: #6c757d;
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: 3rem;
      }

      .hero__btn {
        border-width: 2px;
        background-color: var(--primary);
        border-color: var(--primary);
        color: #fff;
        position: relative;
        top: 0;
        transition: 0.3s all ease;
        box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
        font-size: 16px;
        border-radius: 30px;
        padding: 10px 30px;
      }
    `}</style>
  </div>
);