import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 30 }}>Fluente - Nativo</Text>
        <Text>Escolha um idioma</Text>
      </View>

      <View style={styles.cards}>
        <Link href="/learn/NG" style={styles.button}>
          <FontAwesome5 name="leanpub" size={24} color="#fff" />
          <Text style={styles.textButton}>Aprender Nganguela</Text>
        </Link>
        <Link href={"/learn/NH"} style={styles.button}>
          <FontAwesome5 name="leanpub" size={24} color="#fff" />
          <Text style={styles.textButton}>Aprender Nhaneca</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 60,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#f34c0a",
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 20,
  },
  cards: {
    gap: 10,
  },
});
