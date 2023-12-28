import React from "react";
import { PageTitle } from "../components/PageTitle";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <PageTitle title="Home" />
      <Parallax pages={6}>
        <ParallaxLayer>Hi</ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          Hello
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2.5}>
          And
        </ParallaxLayer>
        <ParallaxLayer offset={3}>How</ParallaxLayer>
        <ParallaxLayer offset={4}>Are</ParallaxLayer>
        <ParallaxLayer offset={5}>You?</ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Home;
