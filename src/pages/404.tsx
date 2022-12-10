import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { H1, P } from "../components/typography";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <H1>Page not found</H1>
      <P>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </P>
    </Layout>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
