import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import thumbnail1 from "../../assets/images/modelo_1.png";
import thumbnail2 from "../../assets/images/modelo_2.png";
import thumbnail3 from "../../assets/images/modelo_3.png";
import thumbnail4 from "../../assets/images/modelo_4.png";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Carousel from "../../components/Carousel";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../contexts/GlobalContext";

function Produto({ route }) {
    const images = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];
    const sizes = ["P", "M", "G", "GG"];

    const [sizeOption, setSizeOption] = useState();
    const [numItems, setNumItems] = useState(0);

    const incrementarNumItems = () => {
        setNumItems(numItems + 1);
    }

    const decrementarNumItems = () => {
        if (numItems > 0) {
            setNumItems(numItems - 1);
        }
    }

    const navigation = useNavigation();

    const { produto } = route.params;

    const { adicionarItemNoCarrinho } = useContext(GlobalContext);

    const item = {
        name: produto.name,
        price: produto.price,
        numItems,
        sizeOption,
        total: produto.price * numItems
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Carousel images={images} />

            <View style={[styles.row, styles.rowButton]}>
                <Pressable style={styles.arrow} onPress={() => navigation.goBack()}>
                    <AntDesignIcon name="arrowleft" size={20} />
                </Pressable>

                <Pressable style={[styles.arrow, { marginStart: 250 }]} onPress={() => navigation.navigate("CarrinhoCompras")}>
                    <AntDesignIcon name="shoppingcart" size={20} />
                </Pressable>
            </View>

            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <AntDesignIcon name="star" size={20} color={"#FDCC0D"} />
                    <Text style={styles.rate}>{produto.review}</Text>
                    <Text style={styles.reviews}>(85) Reviews</Text>
                </View>

                <Text style={styles.name}>{produto.name}</Text>
                <Text style={styles.price}>{produto.price}</Text>
                <Text style={styles.text}>Selecionar Tamanho:</Text>

                <View style={{ flexDirection: "row" }}>
                    {
                        sizes.map((size, indice) => {
                            return (
                                <Pressable
                                    onPress={() => setSizeOption(indice)}
                                    style={(indice === sizeOption) ? styles.sizeButtonSelected : styles.sizeButton} key={indice}>
                                    <Text style={styles.sizeText}>{size}</Text>
                                </Pressable>
                            )
                        })
                    }
                </View>

                <View style={styles.row}>
                    <View style={[styles.row, styles.buttonGroup]}>
                        <Pressable onPress={decrementarNumItems} style={styles.button}>
                            <AntDesignIcon name="minus" size={15} />
                        </Pressable>
                        <Text style={styles.numItems}>{numItems}</Text>
                        <Pressable onPress={incrementarNumItems} style={styles.button}>
                            <AntDesignIcon name="plus" size={15} />
                        </Pressable>
                    </View>

                    <Pressable onPress={() => adicionarItemNoCarrinho(item)} style={styles.buttonCarrinho}>
                        <Text style={styles.textCarrinho}>Adicionar ao Carrinho</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default Produto;

const styles = StyleSheet.create({
    container: {
        margin: 25
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rate: {
        fontSize: 18,
        fontWeight: "bold",
        marginStart: 5
    },
    reviews: {
        color: "#CACACA",
        marginStart: 5
    },
    name: {
        fontSize: 16,
        marginTop: 10
    },
    price: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 10
    },
    text: {
        fontSize: 16,
        marginVertical: 15
    },
    sizeButton: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 20,
        marginEnd: 10
    },
    sizeButtonSelected: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 20,
        marginEnd: 10,
        backgroundColor: "#FFA959",
        borderColor: "#FFA959"
    },
    sizeText: {
        fontSize: 16
    },
    buttonGroup: {
        backgroundColor: "#D9D9D9",
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 30,
        alignItems: "center"
    },
    button: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 10,
        backgroundColor: "#FFF",
        marginHorizontal: 10
    },
    numItems: {
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonCarrinho: {
        backgroundColor: "#FF7A00",
        padding: 10,
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 30,
        alignSelf: "stretch"
    },
    textCarrinho: {
        color: "#FFF",
        fontWeight: "bold",
        textAlign: "center"
    },
    rowButton: {
        position: "absolute",
    },
    arrow: {
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 20,
        marginHorizontal: 25,
        marginVertical: 50,
    }
});