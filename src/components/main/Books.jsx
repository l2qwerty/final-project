import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Cards from "./Cards";
import Service from "../../services/http-service";

function Books() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    Service.get("http://localhost:8000/goods")
      .then((res) => setCards(res.response))
      .catch((error) => {
        throw new Error(error);
      });
  }, []);
  return (
    <Grid container justifyContent="center" alignItems="center">
      {cards.map((item) => (
        <Grid
          item
          lg={4}
          sm={6}
          container
          justifyContent="center"
          key={item.id}
        >
          <Cards
            title={item.title}
            img={item.img}
            alt={item.alt}
            text={item.text}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Books;
