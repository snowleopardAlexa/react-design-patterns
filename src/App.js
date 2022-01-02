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
    <SplitScreen 
      left={LeftHandComponent}
      right={RightHandComponent}
    />
  );
}

export default App;
