import { withPublic } from "lib/routes";
import Head from "next/head";

function Home({}) {
  return <div>Hello world</div>;
}

export default withPublic(Home);
