import { HeadFC, Link, PageProps, withPrefix } from "gatsby";

import Seo from "../../components/seo";
import { H1, H2, H3, P } from "../../components/typography";
import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Breadcrumb from "../../components/breadcrumb";

const Inspirations: React.FC<PageProps<Queries.InspirationListPageQuery>> = ({
  data,
  path,
  pageContext,
  params,
}) => {
  return (
    <Layout>
      <div className="mb-4">
        <Breadcrumb
          items={[{ label: "Inspirations", link: "/inspirations" }]}
        />
      </div>

      <div className="flex flex-col justify-center text-center">
        <H1>Trois manières de percevoir le paysage</H1>
      </div>

      <P>
        Pink Orange Paysage est aussi une ouverture aux arts. Les travaux
        paysagers s’inspirent de la richesse de la nature. Les multiples voyages
        qu’a entrepris Charles Dewing Tyler lui ont permis de retranscrire à
        travers ses projets toute cette complexité et cette richesse dont nous
        sommes témoins. Il s’agit avant tout de regarder et de saisir ce qui
        nous entoure. A travers cette quête, le rôle de la texture est une
        recherche constante de diversité végétale. La texture permet de
        multiples interprétations, le toucher n’est pas anodin dans le paysage,
        c’est ce qui nous lie de manière physique à notre terre. Tout le travail
        de Charles Dewing Tyler interroge justement cette relation entre l’homme
        et la nature. L’art environnemental est une réponse à cette question :
        quels sont les liens de l’homme avec sa mère Nature.
      </P>
      <P>
        Quelques travaux de Charles en photographies, peinture et quelques
        échantillons de textures végétales…
      </P>

      <div>
        <div className="col-span-3 grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
          {data.inspirations.nodes
            .map((node) => {
              return {
                value: node.name,
                label: node.childMdx?.frontmatter?.title,
                description: node.childMdx?.frontmatter?.description,
                image:
                  node.childMdx?.frontmatter?.featuredImage?.childImageSharp
                    ?.gatsbyImageData,
                excerpt: node.childMdx?.excerpt,
              };
            })
            .map(({ value, label, description, image, excerpt }) => (
              <div className="group relative">
                <Link to={withPrefix(`/inspirations/${value}`)}>
                    <H2>{label}</H2>

                    <GatsbyImage
                    alt={label || value || ""}
                    image={getImage(image || null)!}
                    objectFit="fill"
                  />
                </Link>
                <H3>{description}</H3>
                <P>{excerpt}</P>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

/*
inspirations: allMdx(filter: { fields: { source: {eq: "inspirations"} }}) {
         nodes {
            frontmatter {
            title
            description
                featuredImage {
                    ... on File {
                      childImageSharp {
                        gatsbyImageData(width: 500, height: 500)
                      }
                    }
                }
            }

        }
    }
* */
export const query = graphql`
  query InspirationListPage {
    inspirations: allFile(
      filter: { sourceInstanceName: { eq: "inspirations" } }
    ) {
      nodes {
        name
        childMdx {
          excerpt
          frontmatter {
            title
            description
            featuredImage {
              ... on File {
                childImageSharp {
                  gatsbyImageData(width: 500, height: 500)
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Inspirations;

export const Head: HeadFC = () => <Seo title="Index" />;
