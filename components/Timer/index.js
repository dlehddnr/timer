import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components";

const Container = styled.View`
  flex: 1;
  background-color: #ce0b24;
`;

const Upper = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const Lower = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Time = styled.Text`
  color: white;
  font-size: 120px;
  font-weight: 100;
`;

const T = styled.Text``;

const Timer = () => {
  return (
    <Container>
      <StatusBar barStyle={"light-content"} />
      <Upper>
        <Time>25:00</Time>
      </Upper>
      <Lower>
        <T>Button Here</T>
      </Lower>
    </Container>
  );
};

export default Timer;
