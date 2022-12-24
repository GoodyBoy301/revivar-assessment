import type { FC, ReactNode } from "react";
import Meta from "@defaults/Meta";
import Header from "@components/Header";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const Layout: FC<Props> = ({ title, description, children }) => {
  return (
    <>
      <Meta title={title} desc={description} />
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
