import React, { useEffect } from "react";

const TestBack = () => {
  useEffect(() => {
    fetch("http://localhost:8081/user")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);
  return <></>;
};

export default TestBack;
