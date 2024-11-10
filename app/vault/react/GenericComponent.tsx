/**
 *
 * ? November 3rd, 2024
 *
 * * Don't know a use case, but still interesting...
 *
 */

type ListProp<T> = {
  items: T[];
  getKey: (item: T) => React.Key;
  renderItem: (item: T) => React.ReactNode;
};

function GenericComponent<Item>({ items, getKey, renderItem }: ListProp<Item>) {
  return (
    <div>
      {items.map((item) => (
        <div key={getKey(item)}>{renderItem(item)}</div>
      ))}
    </div>
  );
}

export default GenericComponent;
