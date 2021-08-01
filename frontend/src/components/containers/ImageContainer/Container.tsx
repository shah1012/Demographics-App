import React from "react";
import styled from "styled-components";
import { BoxType } from "../../../types/BoxType";

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
  max-height: 400px;
  object-fit: contain;
  background-size: contain;
`;

interface Props {
  url: string;
  box: BoxType | BoxType[];
}

const Container = ({ url, box }: Props) => {
  return (
    <ImageContainer className="imageContainer">
      <ImageWrapper>
        <Image src={url} width="500px" height="auto" className="logoImg" />
        {Array.isArray(box) ? (
          box.map((b: BoxType) => (
            <BoundingBoxDiv
              style={{
                top: b.top,
                right: b.right,
                bottom: b.bottom,
                left: b.left,
              }}
            />
          ))
        ) : (
          <BoundingBoxDiv
            style={{
              top: box.top,
              right: box.right,
              bottom: box.bottom,
              left: box.left,
            }}
          />
        )}
      </ImageWrapper>
    </ImageContainer>
  );
};

export default Container;
