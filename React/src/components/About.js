import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is a About us page</h2>
      {/* <User
        name={"Dimple (function)"}
        location={"Bangalore (function)"}
        email={"dimpledechamma96@gmail.com (function)"}
      /> */}

      <UserClass
        name={"Dimple (class)"}
        location={"Bangalore (class)"}
        email={"dimpledechamma96@gmail.com (class)"}
      />
    </div>
  );
};

export default About;
