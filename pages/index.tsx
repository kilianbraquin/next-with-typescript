import { HomeTemplate } from "@components/templates";
import { GetStaticProps, NextPage } from "next";

type Props = {
  //
};

const Home: NextPage<Props> = () => <HomeTemplate />;

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {},
  };
};

export default Home;
