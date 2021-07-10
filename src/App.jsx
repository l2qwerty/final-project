import React from "react";
import Service from "./services/http-service";

function App() {
  const services = new Service();
  React.useEffect(() => {
    services
      .get("https://run.mocky.io/v3/c87e58ab-40a9-416d-b4e0-85b20a6a0be1")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  }, [services]);
  return <div />;
}

export default App;
