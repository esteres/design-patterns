import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './components/split-screen';

function App() {
  const LeftSideComp = () => {
    return (
      <h2 style={{backgroundColor: 'crimson'}}>I am left!</h2>
    )
  }

  const RightSideComp = () => {
    return (
      <h2 style={{backgroundColor: 'burlywood'}}>I am right!</h2>
    )
  }

  return (
    <SplitScreen Left={LeftSideComp} Right={RightSideComp}/>
  );
}

export default App;
