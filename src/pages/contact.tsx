import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <form action="#" method="POST">
        <div className="overflow-hidden">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-4xl font-normal leading-normal mt-0 mb-2">
              Contactez nous
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Remplissez ce formulaire pour plus d'informations sur nos services
            </p>
          </div>
          <div className="bg-white px-4 py-5 sm:px-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="full-name"
                  placeholder="Antoine Martin"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  autoComplete="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="message"
                  rows={5}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <Seo title="Home page" />;
