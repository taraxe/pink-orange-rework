import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";
import * as React from "react";
import { HeadFC } from "gatsby";
import { H1, P } from "../components/typography";
import Layout from "../components/layout";

export const About = () => {
  return (
    <Layout>
      <H1>Experience</H1>
      <P>
        Après des années d'experience en Grande Bretagne, Allemagne, et
        Australie, Charles Dewing Tyler à fait Bordeaux, dans le Sud-ouest de
        France son siège.
      </P>
      <P>
        Depuis dix ans Charles Dewing Tyler à travailler en association avec
        l'Atelier de Landcraft, créant certains des plus beaux parcs et jardins
        des châteaux autour de Bordeaux, remportant deux fois le très
        prestigieux Best of Wine Tourism, catégorie “Architecture et Paysages”.
      </P>
      <P>
        Son expérience de design lui permet de travailler avec des architectes
        comme Jean de Giacinto sur des projets de grande envergure comme le
        concours conception-réalisation pour la refonte de l'usine des eaux
        usées de clichy (92).
      </P>
      <P>
        Pink Orange Paysage est l’éclosion de vingt années d’études, de
        recherches et d’expérience dans le domaine du paysage. Charles Dewing
        Tyler est paysagiste concepteur reconnu par l'état.
      </P>

      <H1>Qualifications</H1>

      <ul className="list-disc list-inside text-base font-light leading-relaxed mt-0 mb-4">
        <li>Licence d'économie à l'Université de Warwick (UK) en 1992</li>
        <li>Diplôme de paysage à l'Université de Sheffield (UK) en 1999</li>
        <li>
          En reconnaissance de son travail dan la domaine, DPLG de l'Ecole
          Nationale Supérieure de Paysage Versailles en 2015
        </li>
      </ul>

      <div className="flex flex-row justify-between">
        <StaticImage
          src="../images/about/dplg.jpg"
          alt="Architecte paysagiste DPLG"
          placeholder="blurred"
          width={155}
          height={119}
        />

        <StaticImage
          src="../images/about/warwick.jpg"
          alt="University of Warwick"
          placeholder="blurred"
          width={155}
          height={119}
        />

        <StaticImage
          src="../images/about/sheffield.jpg"
          alt="University of Sheffield"
          placeholder="blurred"
          width={155}
          height={119}
        />
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="Home page" />;

export default About;
