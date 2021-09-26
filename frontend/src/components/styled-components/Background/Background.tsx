import styled from "styled-components";
import Particles from "react-particles-js";

const ParticalesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ParticleBackground = ({ children }: Props) => {
  return (
    <>
      <Particles className="particles" params={ParticalesOptions}></Particles>
      {children}
    </>
  );
};
