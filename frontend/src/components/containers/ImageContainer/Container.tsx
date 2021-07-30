import React from "react";
import styled from "styled-components";

const BoundingBoxDiv = styled.div`
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`;

const ImageWrapper = styled.div`
  position: absolute;
  margin-top: 10px;
`;

const Image = styled.img`
  width: 500px;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  background-size: contain;
`;

type BoxType = {
  top: number;
  right: number;
  bottom: number;
  left: number;
};

interface Props {
  url: string;
  box: BoxType | BoxType[];
}

const Container = ({ url, box }: Props) => {
  return (
    <ImageContainer className="imageContainer">
      <ImageWrapper>
        <Image src={url} width="500px" height="auto" className="logoImg" />
        {console.log(typeof box, box)}
      </ImageWrapper>
    </ImageContainer>
  );
};

export default Container;
