import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { usuario } = route.params || { usuario: "Invitado" };

  return (
    <FlatList
      ListHeaderComponent={
        <View>
          <Text>Bienvenido, {usuario}!</Text>
          <Text>Seleccione un tema de pregunta</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Quiz", { category: "Math" })}
          >
            <Text>Matemáticas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Quiz", { category: "Science" })}
          >
            <Text>Ciencias</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Quiz", { category: "History" })}
          >
            <Text>Historia</Text>
          </TouchableOpacity>
        </View>
      }
    />
  );
};

export default Home;
