import './App.css';
import { SplitScreen } from './components/split-screen';
import { SmallAuthorListItem } from './components/lists/authors/SmallListItems';
import { LargeAuthorListItem } from './components/lists/authors/LargeListItems';
import RegularList from './components/lists/RegularList';
import { authors } from './data/lists/authors';

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
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComp title={'Left'} />
        <RightSideComp title={'Right'} />
      </SplitScreen>
      <RegularList items={authors} sourceName={'author'} ItemComponent={SmallAuthorListItem} />
      <RegularList items={authors} sourceName={'author'} ItemComponent={LargeAuthorListItem} />
    </>
  );
}

export default App;
