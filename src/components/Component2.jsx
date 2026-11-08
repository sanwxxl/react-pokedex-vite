import { Flex } from "antd";
import { useEffect, useState } from "react";
import loading from "../img/pikachuSpace.gif"


function Component2(props) {

  
  const [sprite, setSprite] = useState(loading);

  useEffect(() => {
    setSprite(loading);
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokeId}`)
      .then((res) => res.json())
      .then((data) => {

        setSprite(data.sprites.other["official-artwork"].front_default);
      })
      .catch((err) => console.error(err));
  }, [props.pokeId]);


  return (
    <div style={{ margin: "0 15em" }}>
      <Flex align="start" justify="center">
        <img src={sprite} alt="" />
      </Flex>
    </div>
  );
}

export default Component2;
