import React, {useState} from "react";
const UseReactState = () => {
const [count, setCount] = useState(0)
const [user, setUser] = useState({
   name: "Imran",
    age: 28,
    city: "Mumbai"
})
  const updateAge = () => {
    // pura purana maal leke sirf age badal raha
    setUser({ ...user, age: user.age + 1 });
  };

  const changeCity = () => {
    setUser({ ...user, city: "Pune" });
  };
  return (
    <>
      <div>
        <h4>UseState fruits {count}</h4>
        <button onClick={() => setCount(count + 1)}>
          Add Fruit {count}
        </button>
      </div>
        <div>
      <h2>{user.name} - {user.age} - {user.city}</h2>
      <button onClick={updateAge}>Age Badha</button>
      <button onClick={changeCity}>City Badal</button>
    </div>
    </>
  );
};

export default UseReactState;
