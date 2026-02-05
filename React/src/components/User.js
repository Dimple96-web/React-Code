import { useState } from "react";

const User = ({ name, location, email }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Count in function: {count}</h3>
      <h3>Count1 in function: {count1}</h3>
      <h3>Location: {location}</h3>
      <h4>Email: {email}</h4>
    </div>
  );
};

export default User;
