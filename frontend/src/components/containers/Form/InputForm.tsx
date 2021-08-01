import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ImageUrl } from "../../../misc/backendUrls";
import ImageContainer from "../ImageContainer/Container";
import { BoxType } from "../../../types/BoxType"

const InputField = styled.input`
  font-size: 28px;
  width: 700px;
  height: 50px;

  border-radius: 10px;
  border: none;

  background-color: var(--primaryColor);
  color: var(--whiteColor);

  padding: 1rem;

  margin-right: 2rem;

  @media (max-width: 1024px) {
    width: 600px;
  }

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 480px) {
    width: 300px;
  }

  &:focus {
    outline: none;
    border: none;
    box-shadow: 0 0 0 3px hsla(220, 100%, 50%, 80%);
  }
`;

const InputButton = styled.button`
  background-color: var(--red);
  color: var(--whiteColor);

  border-radius: 10px;

  border: none;
  outline: none;

  cursor: pointer;

  width: 125px;
  height: 50px;

  font-size: 1.5rem;
  user-select: none;

  &:active {
    background-color: darkRed;
    transform: scale(0.9);
  }

  @media (max-width: 1024px) {
    width: 125px;
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    width: 100px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 75px;
    font-size: 0.95rem;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 90%;
`;

const FormContanier = styled.div`
  width: 100%;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  algin-items: center;
`;

interface Props {
  inputValue: string;
  setInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const calculateBox = (data: any) => {
  const image = document.querySelector<HTMLImageElement>(".logoImg");
  const width = Number(image!.width);
  const height = Number(image!.height);

  const ch = data.bottom_row * height;
  const cw = data.right_col * width;

  return {
    top: data.top_row * height,
    right: width - cw,
    bottom: height - ch,
    left: data.left_col * width,
  };
};

const handleSubmit = (
  e: FormEvent,
  inputValue: string,
  setImageUrl: Dispatch<SetStateAction<string>>,
  setBox: Dispatch<SetStateAction<BoxType | BoxType[]>>
) => {
  e.preventDefault();

  setImageUrl(inputValue);

  axios
    .post(ImageUrl, {
      url: inputValue,
    })
    .then((data) => {
      console.log(data.data.data);

      if (data.data.data.regions.length > 1) {
        let calculatedBoxes: BoxType[] = [];
        data.data.data.regions.forEach((region: any) => {
          calculatedBoxes.push(calculateBox(region.region_info.bounding_box));
        });

        setBox(calculatedBoxes);
      } else {
        const boundingBoxInfo =
          data.data.data.regions[0].region_info.bounding_box;
        setBox(calculateBox(boundingBoxInfo));
      }
    });
};

const InputForm = ({ inputValue, setInputValue }: Props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState<BoxType | BoxType[]>({} as BoxType);

  return (
    <FormContanier>
      <ImageContainer url={imageUrl} box={box} />
      <FormWrapper
        onSubmit={(e) => handleSubmit(e, inputValue, setImageUrl, setBox)}
      >
        <InputField onChange={(e) => setInputValue(e)} value={inputValue} />
        <InputButton>Submit</InputButton>
      </FormWrapper>
    </FormContanier>
  );
};

export default InputForm;
