import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ptToNg from "../../assets/lang/pt-ng.json";
import ptToNh from "../../assets/lang/pt-nh.json";

type lanType = "NG" | "NH";

export default function Learn() {
  const { lan } = useLocalSearchParams();

  const [word, setWord] = useState<string | null>(null);
  const [translation, setTranslation] = useState<string | null>(null);

  useEffect(() => {
    handleButtonClick(lan as lanType);
  }, [lan]);

  const handleButtonClick = (lan: "NG" | "NH") => {
    const wordIndex = Math.floor(Math.random() * 100); // assuming you have 100 words
    let wordList, translationList;

    switch (lan) {
      case "NG":
        wordList = Object.keys(ptToNg);
        translationList = Object.values(ptToNg);
        break;
      case "NH":
        wordList = Object.keys(ptToNh);
        translationList = Object.values(ptToNh);
        break;
    }
    setWord(wordList[wordIndex]);
    setTranslation(translationList[wordIndex]);
  };
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: lan === "NG" ? "Nganguela" : "Nhaneca",
        }}
      />

      {word && translation && (
        <View style={styles.learnBox}>
          <Text style={styles.word}>Palavra: {word}</Text>
          <Text style={styles.translation}>Tradução: {translation}</Text>
        </View>
      )}
      <Button
        title="Nova Palavra"
        onPress={() => handleButtonClick(lan as lanType)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  learnBox: {
    marginTop: 20,
    alignItems: "center",
  },
  word: {
    fontSize: 20,
  },
  translation: {
    fontSize: 30,
  },
});
