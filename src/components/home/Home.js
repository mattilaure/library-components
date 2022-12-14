import React, { useEffect, useState } from "react";
import { Text,View } from "react-native";
import CrossButton from "../button/CrossButton";
import Game from "../game/Game";
import CrossInputBox from "../inputBox/CrossInputBox";
import Ranking from "../ranking/Ranking";

//storage
import { setInStorage, getFromStorage } from "../utils/storage";

function Home() {
  const [visibile, setVisible] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    storeData();
  }, []);

  async function storeData() {
    const ranking = await getFromStorage("ranking");
    if (!ranking) {
      await setInStorage([]);
    }
  }

  let nameTemp = "";
  const handleChange = (e) => {
    nameTemp = e.toLowerCase();
  };
  const startGame = () => {
    setName(nameTemp);
    setVisible(true);
  };

  return (
    <>
      {!visibile ? (
        <View style={{backgroundColor: "#c85260",height:800}}>
          <Text>Sasso Carta Forbice</Text>
          <CrossInputBox
            placeholder={"Inserire username"}
            callback={handleChange}
            style={inputStyle}
          />
          <CrossButton
            callback={startGame}
            style={buttonStyle}
            label={"Inserisci nome"}
          />

          <Ranking />
        </View>
      ) : (
        <Game name={name} />
      )}
    </>
  );
}
const inputStyle = {
  width: 250,
  height: 50,
  padding: 1,
};
const buttonStyle = {
  width: 100,
  backgroundColor: "red",
};
export default Home;
