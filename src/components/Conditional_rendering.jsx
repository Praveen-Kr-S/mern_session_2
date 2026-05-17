import React from 'react'

const Conditional_rendering = () => {

  // if-else statement
  let value = 1;
  let data = null;
  if (value > 5) {
    data = <h1>Value is greater than 5</h1>;
  } else {
    data = <h1>Value is not greater than 5</h1>;
  }
  
  // Ternary operator
  let name = "Praveen";
  let user = (name == "Sabari") ? <h1>Valid User</h1> : <h2>Invalid User</h2>;

  // Short circuit operator
  let isLoggedIn = false;
  let message = isLoggedIn && <h1>Welcome back, user!</h1>;
  let a = 100==101 && <h1>Value is Equal</h1>;

  return (
    <div>
      <h2>Conditional Rendering</h2>
      {data}
      {user}
      {message}
      {a}
    </div>
  )
}

export default Conditional_rendering