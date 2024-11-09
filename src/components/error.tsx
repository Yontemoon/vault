import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

const Error = () => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <Button asChild>
        <Link to="/">Home Page</Link>
      </Button>
    </div>
  );
};

export default Error;
