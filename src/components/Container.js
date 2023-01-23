import Head from "next/head";
import { useRouter } from "next/router";

import Navigation from "./nav/navigation";

const Container = (props) => {
  return (
    <div>
      <Navigation category={props.category} />

      <div className="space-body">{props.children}</div>
    </div>
  );
};

export default Container;
