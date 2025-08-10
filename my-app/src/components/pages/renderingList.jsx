import React from "react";
const RenderingList = () => {
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
];
 const ListTimes = ({name}) => {
    return (<li>{name}</li>);
 }   
 const fruits = ["Apple", "Banana", "Mango"];
  return (
    <>
      <div>
        <h2>Rendering List</h2>
        <h4>Fruits</h4>
        <ul>
         {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
        <h4>Items</h4>
       <ul>
          {items.map((item) => (
            <ListTimes key={item.id} name={item.name} />
            ))}
        </ul>
      </div>
    </>
  );
};

export default RenderingList;
