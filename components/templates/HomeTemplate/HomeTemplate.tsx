import { Link } from "@components/atoms";
import { TypeScriptSquare } from "@components/icons/solid";
import { NextSeo } from "next-seo";
import { FC, Fragment } from "react";

type HomeTemplateProps = {
  //
};

const HomeTemplate: FC<HomeTemplateProps> = () => {
  return (
    <Fragment>
      <NextSeo title="NextJS Starter" />
      <main>
        <div>
          <TypeScriptSquare size={36} />
          <h1>
            <Link href="https://github.com/">Hello Website</Link>
          </h1>
        </div>
      </main>
    </Fragment>
  );
};

export { HomeTemplate };
export type { HomeTemplateProps };
