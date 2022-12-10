import { graphql, HeadFC, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import {H1} from "../components/typography";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "../pages/inspirations/index.module.css";
import * as DesignSystem from "../components/design-system";
import Seo from "../components/seo";
import Breadcrumb from "../components/breadcrumb";
import {MDXProvider} from "@mdx-js/react";

const Inspiration: React.FC<PageProps<Queries.InspirationPageQuery>> = ({
  data,
  path,
  pageContext,
  params,
    children
}) => {
  console.log(data, pageContext, path, params, children);

  return (
    <Layout>
      <div className="mb-4">
        <Breadcrumb
          items={[
            { label: "Inspirations", link: "/inspirations" },
            { label: data.category?.childMdx?.frontmatter?.title || "", link: "" },
          ]}
        />
      </div>

      <div className="flex flex-col justify-center text-center">
        <H1>{data.category?.childMdx?.frontmatter?.title}</H1>
      </div>

        <MDXProvider
            components={DesignSystem.default}
        >
            {children}
        </MDXProvider>

      <div className={styles.gallery}>
        {data.images.group
          .flatMap(({ nodes }) => nodes)
          .map((n, i) => (
            <GatsbyImage
              key={i}
              alt={""}
              image={getImage(n.childImageSharp)!}
              objectFit="fill"
              className="shadow-md hover:shadow hover:ease-in-out hover:cursor-pointer transition duration-150"
            />
          ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query InspirationPage($value: String!) {
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "inspirations-images" }
        relativeDirectory: { eq: $value }
      }
    ) {
      group(field: { relativeDirectory: SELECT }) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, height: 1000)
          }
        }
      }
    }
    category: file(name: { eq: $value } sourceInstanceName: { eq: "inspirations" }) {
      name
      childMdx {
        frontmatter {
            description
            title
        }
      }
    }
  }
`;

export default Inspiration;

export const Head: HeadFC<Queries.InspirationPageQuery> = ({ data }) => (
  <Seo title={data.category?.childMdx?.frontmatter?.title || undefined} />
);
