import React, { useState, useEffect } from "react";
import { View, FlatList, Text, ScrollView } from "react-native";
import { getFromStorage } from "../utils/storage";
import style from "./rankingStyle";

function Ranking() {
  const [state, setState] = useState({
    rank: [],
  });

  useEffect(() => {
    getRanking();
  }, []);

  async function getRanking() {
    const ranking = await getFromStorage();
    setState({
      ...state,
      rank: ranking.sort((a, b) => b.wins - a.wins),
    });
  }

  const renderItem = ({ item }) => (
    // <Item name={item.username} score={item.wins}/>
    <View style={style.rowItem}>
      <View style={style.cell}>
        <Text style={style.textColor}>{item.username}</Text>
      </View>
      <View style={style.cell}>
        <Text style={style.textColor}>{item.wins}</Text>
      </View>
    </View>
  );

  return (
    <View style={style.rankContainer}>
      <View style={style.headerTable}>
        <View style={style.headerRow}>
          <Text style={[style.textColor, { fontWeight: "bold" }]}>
            Username
          </Text>
        </View>
        <View style={{ padding: 5, width: "50%" }}>
          <Text
            style={[
              style.textColor,
              {
                fontWeight: "bold",
                justifyContent: "center",
                flexDirection: "row",
              },
            ]}
          >
            Vittorie
          </Text>
        </View>
      </View>

      <FlatList data={state.rank} renderItem={renderItem} />
    </View>
  );
}

export default Ranking;
