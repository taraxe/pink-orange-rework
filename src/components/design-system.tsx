import {H1, H2, H3, P} from "./typography";
import * as React from "react";

const ds = {
    // Map HTML element tag to React component
    h1: H1,
    h2: H2,
    h3: H3,
    // Or define component inline
    p: P,
    ul: (props:React.HTMLAttributes<HTMLUListElement>) => <ul {...props} className="list-disc" />,
}

export default ds;