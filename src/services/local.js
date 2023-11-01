import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const salvarLocalmente = async (items) => {
    await AsyncStorage.setItem("carrinho", JSON.stringify(items))
        .catch((error) => Alert.alert(`Erro ${error.status}: não foi possível salvar os itens localmente.`))
}

export const removerLocalmente = async () => {
    await AsyncStorage.removeItem("carrinho")
        .catch((error) => Alert.alert(`Erro ${error.status}: não foi possível remover os itens localmente.`))
}

export const obterItensDoCarrinho = async (setItems) => {
    const itens = await AsyncStorage.getItem("carrinho");

    if (itens) {
        setItems(JSON.parse(itens));
    }
}