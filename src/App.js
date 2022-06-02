import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import Background from "./components/background/Background";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

function App() {
  return ( <>
    <AppContainer>
      <Background/>
    </AppContainer>
    <AccountBox />
    </>
  );
}

export default App;
//     
