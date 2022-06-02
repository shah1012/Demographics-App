import styled from "styled-components";

export const SignupH1 = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  color: var(--whiteColor);
`;

export const SignupWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  user-select: none;
`;

export const SignupForm = styled.form`
  width: clamp(50%, 300px, 600px);
  margin-top: 10vh;

  border-radius: 10px;
  padding: 20px;

  background-color: var(--primaryColor);
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const FormLabel = styled.label`
  color: var(--whiteColor);

  font-size: calc(1.25em + 1vmin);
  font-weight: 300;
`;

export const FormInput = styled.input`
  border: none;
  outline: none;
  border-radius: 10px;

  font-size: calc(1em + 1vmin);
  font-weight: 100;
  background-color: var(--secondaryColor);
  color: var(--whiteColor);
  padding: 1rem;

  width: 100%;
  height: 35px;

  &:focus {
    box-shadow: 0 0 0 3px hsla(220, 100%, 50%, 80%);
  }
`;

export const FormButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;

  font-size: calc(1.15em + 1vmin);
  color: var(--whiteColor);
  background-color: var(--red);

  margin: 0px 50px;
  margin-top: 35px;

  transition: all 0.05s ease-in;

  &:active {
    background-color: darkred;
    transform: scale(0.9);
  }

  &:disabled {
    border: 1px solid #999999;
    background-color: #bbb;
    color: #666666;
  }
`;

export const NewToThisLink = styled.p`
  font-size: calc(0.75em + 0.5vmin);
  color: var(--whiteColor);
  font-weight: 200;
  display: inline-block;
  text-align: center;
  margin-top: 15px;
  margin-left: 0;
`;

export const EyeWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

export const Eye = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 10px;
`;
