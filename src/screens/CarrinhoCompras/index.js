import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import CardItem from "../../components/CardItem";
import modelo from "../../assets/images/modelo_1.png";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function CarrinhoCompras() {
    const navigation = useNavigation();

    const { items, esvaziarCarrinho } = useContext(GlobalContext);

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Pressable onPress={() => navigation.goBack()}>
                    <AntDesignIcon name="arrowleft" size={20} color={"#000"} />
                </Pressable>

                <Text style={styles.title}>Minhas Compras</Text>

                <Pressable onPress={esvaziarCarrinho}>
                    <Text style={styles.link}>Limpar</Text>
                </Pressable>
            </View>

            <View>
                {items.map((item, indice) => {
                    return (
                        <CardItem
                            image={modelo}
                            item={item}
                            description={`Tamanho: ${item.sizeOption}`}
                            key={indice}
                        />
                    )
                })}
            </View>

            <View style={styles.row}>
                <TextInput
                    style={styles.input}
                    placeholder="Código Promocional"
                    keyboardType="default"
                    onChange={() => { }}
                    defaultValue=""
                />

                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Aplicar</Text>
                </Pressable>
            </View>

            <View style={styles.resume}>
                <View style={[styles.row, styles.rowResume]}>
                    <Text style={styles.textLeft}>Sub-total</Text>
                    <Text style={styles.textRight}>R$ 2.600</Text>
                </View>

                <View style={[styles.row, styles.rowResume]}>
                    <Text style={styles.textLeft}>Voucher</Text>
                    <Text style={styles.textRight}>- R$ 100</Text>
                </View>

                <View style={[styles.row, styles.rowResume]}>
                    <Text style={styles.textLeft}>Taxa de Entrega</Text>
                    <Text style={styles.textRight}>R$ 20</Text>
                </View>
            </View>
            <View style={[styles.row, styles.rowResume]}>
                <Text style={styles.textRight}>Total</Text>
                <Text style={styles.textRight}>R$ 2.520</Text>
            </View>

            <Pressable style={[styles.button, { marginTop: 10 }]} onPress={() => { }}>
                <Text style={styles.textButton}>Finalizar Compra</Text>
            </Pressable>
        </View>

    )
}

export default CarrinhoCompras;

const styles = StyleSheet.create({
    container: {
        margin: 25,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18
    },
    link: {
        color: "red"
    },
    input: {
        borderRadius: 10,
        borderColor: "#CACACA",
        borderWidth: 1,
        padding: 15,
        flex: 1
    },
    button: {
        backgroundColor: "#FF7A00",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#FF7A00",
        alignSelf: "stretch",
        padding: 15,
        marginStart: 5
    },
    textButton: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center"
    },
    resume: {
        borderBottomWidth: 1,
        borderBottomColor: "#CACACA"
    },
    textLeft: {
        color: "#7C8397"
    },
    textRight: {
        fontWeight: "bold"
    },
    rowResume: {
        marginVertical: 5
    }
});