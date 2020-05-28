import { Header } from "./header";

export const Layout = ({children}) => {
  return (
    <div className="main">
      <Header />
      {children}
    </div>
  );
};
