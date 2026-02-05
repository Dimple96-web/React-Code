import { useRouteError } from "react-router";
const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>OOPS!</h1>
      <h2>Something went wrong</h2>
      <h3>{error.status}</h3>
      <h3>{error.statusText}</h3>
    </div>
  );
};

export default Error;
