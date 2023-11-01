import { Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import imagem1 from "../../assets/images/cartao_compras_icon_1.png";
import imagem2 from "../../assets/images/cartao_compras_icon_2.png";
import imagem3 from "../../assets/images/cartao_compras_icon_3.png";
import imagem4 from "../../assets/images/cartao_compras_icon_4.png";
import SectionHeader from "../../components/SectionHeader";
import CardCategorias from "../../components/CardCategorias";
import CardRecomendacoes from "../../components/CardRecomendacoes";
import modelo from "../../assets/images/modelo_1.png";
import { useNavigation } from "@react-navigation/native";
import { useProdutos } from "../../hooks/useProdutos";

function Loja() {
    const navigation = useNavigation();

    const [produtos] = useProdutos();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.searchBar}>
                    <TextInput style={styles.input} placeholder="Faça sua busca aqui" onChange={() => { }} />
                    <Pressable onPress={() => { }}>
                        <Ionicon name="search" size={20} color={"#D9D9D9"} />
                    </Pressable>
                </View>
                <Pressable onPress={() => navigation.navigate("CarrinhoCompras")}>
                    <Ionicon name="cart-outline" size={30} color={"#000"} />
                </Pressable>
            </View>

            <SectionHeader title={"Comprar por Categorias"} />

            <View style={styles.row}>
                <CardCategorias image={imagem1} label={"Popular"} />
                <CardCategorias image={imagem2} label={"Homem"} />
                <CardCategorias image={imagem3} label={"Mulher"} />
                <CardCategorias image={imagem4} label={"Crianças"} />
            </View>

            <SectionHeader title={"Itens Recomendados"} />

            <View style={styles.row}>
                {produtos.map((produto, indice) => {
                    return (
                        <CardRecomendacoes
                            image={modelo}
                            produto={produto}
                            key={indice}
                        />
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 25
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    searchBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: 250,
        marginVertical: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginEnd: 20
    },
    row: {
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
})

export default Loja;