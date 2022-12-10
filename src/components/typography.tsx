import React from "react";

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

const Text: React.FC<TitleProps> = ({ type = "p", children, className }) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(type, props, children);

  return <Heading className={className}>{children}</Heading>;
};

export const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  props
) => (
  <Text
    type="h1"
    {...props}
    className="text-6xl font-normal leading-normal mt-0 mb-6"
  />
);
export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  props
) => (
  <Text
    type="h2"
    {...props}
    className="text-5xl font-normal leading-normal mt-0 mb-6"
  />
);
export const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  props
) => (
  <Text
    type="h3"
    {...props}
    className="text-4xl font-normal leading-normal mt-0 mb-4"
  />
);

export const P: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = (
  props
) => (
  <Text
    type="p"
    {...props}
    className="text-base font-light leading-relaxed mt-0 mb-4"
  />
);
