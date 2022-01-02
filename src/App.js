import { SplitScreen } from './SplitScreen';
import './App.css';

const LeftHandComponent = () => {
  return <h1 style={{backgroundColor: "red"}}>Left!</h1>
}

const RightHandComponent = () => {
  return <h1 style={{backgroundColor: "blue"}}>Right!</h1>
}

function App() {
  return (
    <SplitScreen leftWeight={3} rightWeight={1}>
      <LeftHandComponent />
      <RightHandComponent />
    </SplitScreen>
  );
}

export default App;
