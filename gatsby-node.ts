import type { GatsbyNode } from "gatsby";
import path from "path";

const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({
  actions,
}) => {
  /*actions.createTypes(`
        type InspirationsCategoriesJson implements Node @infer {
          label: String!
          value: String!
          description: String!
          cover: File! @fileByRelativePath 
        }
        
  `);*/
};

exports.createSchemaCustomization = createSchemaCustomization;

type InspirationsQuery = {
  readonly inspirations: {
    nodes: Queries.FileConnection["nodes"];
  };
};

const createPages: GatsbyNode["createPages"] = ({ actions, graphql }) => {
  const { createPage } = actions;

  const inspirationTemplate = path.resolve(`src/templates/inspiration.tsx`);

  return graphql<InspirationsQuery>(`
    query Inspirations {
      inspirations: allFile(
        filter: { sourceInstanceName: { eq: "inspirations" }}
      ) {
        nodes {
          name
          childMdx {
            id
            internal {
              contentFilePath
            }
            frontmatter {
              title
              description
              featuredImage {
                relativePath
              }
              subTitle
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data?.inspirations.nodes.map(({ id, name, childMdx }) => {
      createPage({
        path: childMdx?.frontmatter?.slug || "",
        component: `${inspirationTemplate}?__contentFilePath=${childMdx?.internal.contentFilePath}`,
        context: { id, value: name },
      });
    });
  });
};

exports.createPages = createPages;
