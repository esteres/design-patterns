import './App.css';
import { SplitScreen } from './components/split-screen';
import { SmallAuthorListItem } from './components/lists/authors/SmallListItems';
import { LargeAuthorListItem } from './components/lists/authors/LargeListItems';
import { SmallBookListItem } from './components/lists/books/SmallListItems';
import { LargeBookListItem } from './components/lists/books/LargeListItems';
import RegularList from './components/lists/RegularList';
import NumberedList from './components/lists/Numbered';
import { authors } from './data/lists/authors';
import { books } from './data/lists/books';

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
      <RegularList 
        items={authors}
        sourceName={'author'}
        ItemComponent={SmallAuthorListItem}
      />
      <RegularList
        items={authors}
        sourceName={'author'}
        ItemComponent={LargeAuthorListItem}
      />
      <RegularList
        items={books}
        sourceName={'book'}
        ItemComponent={SmallBookListItem}
      />
      <RegularList
        items={books}
        sourceName={'book'}
        ItemComponent={LargeBookListItem}
      />
      <NumberedList
        items={books}
        sourceName={'book'}
        ItemComponent={LargeBookListItem}
      />
    </>
  );
}

export default App;
