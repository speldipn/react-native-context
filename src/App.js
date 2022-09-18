import { Text, Button } from "react-native";
import styled from "styled-components/native";
import User from "./components/User";
import { UserProvider, UserConsumer } from "./contexts/UserContext";

const Container = styled.View`
  flex: 1;
  background-color: #1abc9c;
  justify-content: center;
  align-items: center;
`;

const Control = () => {
  return (
    <UserConsumer>
      {({ dispatch }) => (
        <Button
          title="Update"
          onPress={() => {
            dispatch("Neo2");
          }}
        />
      )}
    </UserConsumer>
  );
};

const App = () => {
  const onPress = ({ dispatch }) => {
    dispatch && dispatch("Neo2");
  };
  return (
    <UserProvider>
      <Container>
        <User />
        <Control />
      </Container>
      <User />
    </UserProvider>
  );
};

export default App;
