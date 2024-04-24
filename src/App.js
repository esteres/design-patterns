import logo from './logo.svg';
import './App.css';
import { SplitScreen } from './components/split-screen';

function App() {
  const LeftSideComp = ({title}) => {
    return (
      <h2 style={{backgroundColor: 'crimson'}}>{title}</h2>
    )
  }

  const RightSideComp = ({title}) => {
    return (
      <h2 style={{backgroundColor: 'burlywood'}}>{title}</h2>
    )
  }

  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp title={'Left'} />
      <RightSideComp title={'Right'} />
    </SplitScreen>
  );
}

export default App;
