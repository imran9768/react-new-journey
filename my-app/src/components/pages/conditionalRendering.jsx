import React from "react";
const ConditionalRendering = () => {
const isLoggedIn = true;
  return (
    <>
      <div>
        <h2>Conditional List</h2>
        <h4>Fruits</h4>
        {isLoggedIn ? <h4>Welcome back, User!</h4> : <h4>Please log in to see the list.</h4>}
      </div>
    </>
  );
};

export default ConditionalRendering;
