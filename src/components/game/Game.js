import React, { useEffect, useState } from "react";
import { View, Platform, Image, Text, Pressable } from "react-native";
import CrossButton from "../button/CrossButton";
import CrossText from "../text/CrossText";
import { mobileStyle, webStyle } from "./gameStyle";
import { play } from "../utils/play";
import { setInStorage, getFromStorage } from "../utils/storage";
import { isUnique } from "../utils/isUnique";

let playerPoints = 0;
let cpuPoints = 0;
let ranking = [];
let round = 1;



function Game(props) {
  const [state, setState] = useState({
    choice: null,
    cpuChoice: null,
    playerNameResult: "",
    playerTempChoice: "",
    winner: "",
    currentRound: 1,
    playerScore: 0,
    cpuScore: 0,
    switchScreen: false,
  });
  


  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    ranking = await getFromStorage();
  }

  const handleClick = () => {
 
    let socket = new WebSocket("wss://socketsbay.com/wss/v2/4/3334bd77404ffdb04584da602370f3bb/");
    socket.send(state.choice)
    // let result = play(state.choice);
    // console.log(result);
    // round++;
    // switch (result.resultGame) {
    //   case "w":
    //     playerPoints++;
    //     setState({
    //       ...state,
    //       cpuChoice: result.cpu,
    //       playerNameResult: `Round ${state.currentRound} vinto dal giocatore`,
    //       currentRound: round,
    //       playerScore: playerPoints,
    //     });
    //     break;
    //   case "p":
    //     setState({
    //       ...state,
    //       cpuChoice: result.cpu,
    //       playerNameResult: "Pareggio! Rigioca",
    //       currentRound: round,
    //     });
    //     break;
    //   case "l":
    //     cpuPoints++;
    //     setState({
    //       ...state,
    //       cpuChoice: result.cpu,
    //       playerNameResult: `Round ${state.currentRound} vinto dalla CPU`,
    //       currentRound: round,
    //       cpuScore: cpuPoints,
    //     });
    //     break;
    // }
    // checkWinner(result);
  };

  function checkWinner(result) {
    if (playerPoints >= 2) {
      storeData(true);
      playerPoints = 0;
      cpuPoints = 0;
      round = 1;
      setState({
        ...state,
        playerTempChoice: state.playerTempChoice,
        cpuChoice: result.cpuChoice,
        winner: props.name,
        currentRound: round,
        playerScore: playerPoints,
        cpuScore: cpuPoints,
        switchScreen: true,
      });
    } else if (cpuPoints >= 2) {
      storeData(false);
      playerPoints = 0;
      cpuPoints = 0;
      round = 1;
      setState({
        ...state,
        playerTempChoice: state.playerTempChoice,
        cpuChoice: result.cpuChoice,
        winner: "CPU",
        currentRound: round,
        playerScore: playerPoints,
        cpuScore: cpuPoints,
        switchScreen: true,
      });
    }
  }

  async function storeData(win) {
    const type = typeof isUnique(ranking, props.name);
    const currentUser = isUnique(ranking, props.name);
    if (type === "number") {
      //elemento esiste già
      if (win) {
        ranking[currentUser].wins++;
      }
    } else {
      //elemento non esiste
      const newObj = isUnique(ranking, props.name);
      if (win) {
        newObj.wins++;
        ranking.push(newObj);
      } else {
        ranking.push(newObj);
      }
    }

    await setInStorage(ranking);
  }

  //Setto la scelta del player
  const setChoice = (text) => {
    let pChoose = null;
    switch (text) {
      case "Carta":
        pChoose = 0;
        break;
      case "Forbice":
        pChoose = 1;
        break;
      case "Sasso":
        pChoose = 2;
        break;
    }
    setState({
      ...state,
      playerTempChoice: text,
      choice: pChoose,
    });
  };

  return (
    <View
      style={
        Platform.OS === "web"
          ? webStyle.gameContainer
          : mobileStyle.gameContainer
      }
    >
    
      {!state.switchScreen ? (
        <>
          <Text style={webStyle.title}>
            {props.name} sta giocando contro la CPU
          </Text>
          <Text style={webStyle.title}>Round {state.currentRound}</Text>
          <View style={webStyle.inputContainer}>
            <View style={webStyle.buttonsCoiceContainer}>
              <Pressable
                onPress={() => setChoice("Carta")}
                style={webStyle.imgCont}
              >
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/paper.png")}
                  style={webStyle.card}
                />
              </Pressable>

              <Pressable
                onPress={() => setChoice("Forbice")}
                style={webStyle.imgCont}
              >
                <Image
                  source={require("../assets/images/scissors-game.png")}
                  style={webStyle.card}
                  resizeMode="contain"
                />
              </Pressable>

              <Pressable
                onPress={() => setChoice("Sasso")}
                style={webStyle.imgCont}
              >
                <Image
                  resizeMode="contain"
                  source={require("../assets/images/rock-game.png")}
                  style={webStyle.card}
                />
              </Pressable>
            </View>

            <View style={webStyle.choicesContainer}>
              <Text>
                Hai scelto:{" "}
                <Text style={{ fontWeight: "bold" }}>
                  {state.playerTempChoice}
                </Text>
              </Text>
              <Text>
                La CPU ha scelto:{" "}
                <Text style={{ fontWeight: "bold" }}>{state.cpuChoice}</Text>
              </Text>
            </View>

            <CrossButton
              callback={handleClick}
              style={webStyle.playButton}
              label={"Gioca"}
            />
            <Text style={{ fontSize: 20, margin: 10 }}>
              {state.playerNameResult}
            </Text>
            <Text style={{ fontSize: 20, margin: 5 }}>
              {props.name} - CPU : {state.playerScore} - {state.cpuScore}
            </Text>
          </View>
        </>
      ) : (
        <>
          <Text>Ha vinto: {state.winner}</Text>
          <CrossButton
            callback={() => {
              setState({
                choice: null,
                cpuChoice: null,
                playerNameResult: "",
                playerTempChoice: "",
                winner: "",
                currentRound: 1,
                playerScore: 0,
                cpuScore: 0,
                switchScreen: false,
              });
            }}
            style={webStyle.playButton}
            label={"Rigioca"}
          />
        </>
      )}
    </View>
  );
}

export default Game;
