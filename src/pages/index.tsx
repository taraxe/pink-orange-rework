import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { H1, P } from "../components/typography";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="text-center">
        <H1 className="text-3xl font-bold text-white">Pink Orange Paysage</H1>
      </div>
      <div>
        <P className="text-gray-500">
          Pink Orange Paysage est une agence d'art environnemental gérée par
          Charles Dewing Tyler, paysagiste concepteur.
        </P>
        <P>
          Le nom Pink Orange Paysage fait référence à la lumière de l’aube et à
          celle du crépuscule. Véritable spectacle de la nature dont il peut
          prendre toute son essence par le traitement végétal du site de projet.
        </P>
        <P>
          Pink Orange Paysage est le fruit de vingt années d’études, de
          recherches et d’expériences dans le domaine de l’art environnemental.
        </P>

        {/*<a href="#" className="btn-primary">
            Learn More
          </a>*/}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo title="Home page" />;
