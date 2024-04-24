const RegularList = ({ items, sourceName, ItemComponent }) => {
    return (
      <>
        {items.map((item, i) => {
            console.log(item)
            return <ItemComponent key={i} author={item} />
          }
        )}
      </>
    );
};

export default RegularList;
