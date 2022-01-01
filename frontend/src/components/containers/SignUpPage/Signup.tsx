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
  width: 35%;
  margin-top: 10vh;
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.25);

  border-radius: 10px;
  padding: 20px;

  background-color: var(--primaryColor);

  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (max-width: 1150px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  color: var(--whiteColor);

  font-size: 2rem;
  font-weight: 300;
`;

export const FormInput = styled.input`
  border: none;
  outline: none;
  border-radius: 10px;

  font-size: 1.5rem;
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

  font-size: 1.75rem;
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
  font-size: 1.25rem;
  color: var(--whiteColor);
  font-weight: 200;
  display: inline-block;
  text-align: center;
  margin-top: 15px;
  margin-left: 0;
`;

export const Eye = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
`;
