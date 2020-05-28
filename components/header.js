import Link from 'next/link';

export const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__row">
        <h1 className="header__logo">
          <Link href="/">
            <a>Malcel</a>
          </Link>
        </h1>
        <nav>
          <ul className="header__menu">
            <li>
              <Link href="/">
                <a className="nav-link">ホーム</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <style jsx>{`
      .header {
        padding: 1.5rem;
      }

      .header__row {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        align-items: center;
      }

      .header__logo a {
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }

      .nav-link {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
      }
    `}</style>
  </header>
);
