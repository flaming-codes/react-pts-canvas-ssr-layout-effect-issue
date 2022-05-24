import type { NextPage } from "next";
import { Group } from "pts";
import { useCallback } from "react";
import { HandleAnimateFn, PtsCanvas } from "react-pts-canvas";

const Home: NextPage = () => {
  const onAnimate = useCallback<HandleAnimateFn>((space, form, time) => {
    const line = new Group(space.center, space.pointer);
    form.stroke("#fff").line(line);
  }, []);

  return (
    <PtsCanvas
      background="black"
      style={{ height: "100%", width: "100%" }}
      onAnimate={onAnimate}
    />
  );
};

export default Home;
