import { SplitScreen } from './SplitScreen';
import './App.css';

const LeftHandComponent = ({ name }) => {
  return <h1 style={{backgroundColor: "red"}}>{name}</h1>
}

const RightHandComponent = ({ message }) => {
  return <h1 style={{backgroundColor: "blue"}}>{message}</h1>
}

function App() {
  return (
    <SplitScreen leftWeight={3} rightWeight={1}>
      <LeftHandComponent name="Alexa" />
      <RightHandComponent message="Hello" />
    </SplitScreen>
  );
}

export default App;
