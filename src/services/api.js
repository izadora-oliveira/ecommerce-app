import axios from "axios";
import { Alert } from "react-native";

const api = axios.create({
    baseURL: "http://localhost:8080"
});

export const obterProdutos = async (setProdutos) => {
    await api.get("/produtos").then((response) => {
        setProdutos(response.data)
    }).catch((error) => Alert.alert(`Erro ${error.status}: não foi possível obter a lista de produtos.`))
}

export const obterAnuncios = async (setAnuncios) => {
    await api.get("/anuncios")
        .then((response) => setAnuncios(response.data))
        .catch((error) => Alert.alert(`Erro ${error.status}: não foi possível obter a lista de anúncios.`))
}

export const obterOfertas = async (setOfertas) => {
    await api.get("/ofertas")
            .then((response) => setOfertas(response.data))
            .catch((error) => Alert.alert(`Erro ${error.status}: não foi possível obter a lista de ofertas.`))
}
