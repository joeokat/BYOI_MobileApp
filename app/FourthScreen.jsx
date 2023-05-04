import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

export default function FourthScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Part 4: Waking Your Conscious</Text>
          <Text style={styles.subtitle}></Text>
          <Text style={styles.subtitle}></Text>
          <Text style={styles.subtitle}></Text>
          <Text style={styles.subtitle}></Text>
          <Text style={styles.subtitle}></Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#212121",
  },

  title: {
    fontSize: 32,
    marginBottom: 24,
    fontWeight: "bold",
    color: "#f6f6f6",
  },

  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    color: "#f6f6f6",
  },
});
