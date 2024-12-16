import { StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: colors.gray[300],
  },
  title: {
    fontSize: 28,
    fontFamily: fontFamily.bold,
    color: colors.gray[600],
    marginBottom: 30,
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.gray[600],
  },

  toggleButton: {
    paddingLeft: 10,
  },
  toggleText: {
    fontSize: 14,
    color: "#1976D2", // Azul intermediário
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    backgroundColor: "#1976D2", // Azul intermediário
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  forgotPassword: {
    marginTop: 15,
    fontSize: 14,
    color: "#0D47A1",
    textDecorationLine: "underline",
  },
});
