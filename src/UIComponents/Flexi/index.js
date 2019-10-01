import React from "react";
const Flexi = props => {
  let { items=[],config, handleFieldChange, handleOnSubmit } = props;
console.log(items,"flexi");

  const FlexiConfig = item => {
    let isChild = "children" in item;
console.log(item,"flexiiiii");
    const Components = require(`../Common/${item.type}`).default;
    if (isChild) {
      return (
        <Components data={item.props}>
          {item.children.items.map((Data, Index) => {
            return <div key={Index}>{FlexiConfig(Data)}</div>;
          })}
        </Components>
      );
    } else {
      return (
        <Components
          data={item.props}
          handleFieldChange={handleFieldChange}
          handleOnSubmit={handleOnSubmit}
        />
      );
    }
  };
  return <div>{items.map(item => FlexiConfig(item))}</div>;
};
export default Flexi;
