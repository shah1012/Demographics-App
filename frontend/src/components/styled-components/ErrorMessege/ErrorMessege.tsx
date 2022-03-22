import React from "react";
import styled from "styled-components";

interface Props {
  msg: String;
}

const ErrorMessageDiv = styled.p`
  margin-top: 10px;
  font-size: 1.3rem;
  color: var(--red);
  text-align: center;
  font-weight: 700;
  line-height: 1;
`;

const ErrorMessage = ({ msg }: Props) => {
  return <ErrorMessageDiv>{msg}</ErrorMessageDiv>;
};
export default ErrorMessage;
