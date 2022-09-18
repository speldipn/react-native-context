import React, { useContext } from "react";
import styled from "styled-components/native";
import UserContext from "../contexts/UserContext";

const StyledText = styled.Text`
  font-size: 24px;
  margin: 10px;
`;

export default function User() {
  const { user } = useContext(UserContext);
  return <StyledText>{user.name}</StyledText>;
}
