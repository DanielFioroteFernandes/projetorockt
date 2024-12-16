import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";

import { useState } from "react";

import { s } from "./styles";

import { IconMapPin, IconUser } from "@tabler/icons-react-native";
import { router } from "expo-router";

export function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [isSecure, setIsSecure] = useState(true);

  // const handleLogin = () => {
  //   Alert.alert("Login", `Usuario: ${usuario}\Senha: ${password}`);
  // };

  return (
    <View style={s.container}>
      <Text style={s.title}>Bem-vindo</Text>

      <View style={s.inputContainer}>
        <IconUser size={32} color={"#1976D2"} />
        <TextInput
          style={s.input}
          placeholder="Usuário"
          placeholderTextColor="#A0A0A0"
          keyboardType="email-address"
          autoCapitalize="none"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
      </View>
      <View style={s.inputContainer}>
        <TextInput
          style={s.input}
          placeholder="Senha"
          placeholderTextColor="#A0A0A0"
          secureTextEntry={isSecure}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          onPress={() => setIsSecure(!isSecure)}
          style={s.toggleButton}
        >
          <Text style={s.toggleText}>{isSecure ? "Mostrar" : "Ocultar"}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={s.button}
        onPress={() => router.navigate("/home")}
      >
        <Text style={s.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Recuperação de Senha")}>
        <Text style={s.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}
