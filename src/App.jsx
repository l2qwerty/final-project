import React from "react";
import Service from "./services/http-service";

function App() {
  React.useEffect(() => {
    Service.get()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, [Service]);
  return <div />;
}

export default App;
