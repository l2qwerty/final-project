import React from "react";
import Service from "./services/http-service";

function App() {
  const services = new Service();
  React.useEffect(() => {
    services
      .get("6b51d798-df9f-4e15-ac9b-03e42f912b5e")
      .then((res) => console.log(res));
  }, [services]);
  return <div />;
}

export default App;
