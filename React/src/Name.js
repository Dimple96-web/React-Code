import { useEffect } from "react";

const Name = () => {
  useEffect(() => {
    console.log("Rendering");
  }, []);

  return <h3>{console.log("Dimple")}Dimple</h3>;
};

export default Name;
