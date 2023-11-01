import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function CardItem({ image, item, description }) {
    const { removerItemDoCarrinho } = useContext(GlobalContext);

    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />

            <View>
                <View style={styles.row}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Pressable style={styles.icon} onPress={() => removerItemDoCarrinho(item)}>
                        <EvilIcon name="trash" size={20} color={"#000"} />
                    </Pressable>
                </View>

                <Text>{description}</Text>

                <View style={styles.row}>
                    <Text style={styles.price}>R$ {item.price}</Text>

                    <View style={styles.row}>
                        <Pressable style={styles.button} onPress={() => {}}>
                            <AntDesignIcon name={"minus"} size={15} />
                        </Pressable>

                        <Text style={styles.numItems}>{item.numItems}</Text>

                        <Pressable style={styles.button} onPress={() => {}}>
                            <AntDesignIcon name={"plus"} size={15} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardItem;

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginVertical: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: "#FFF"
    },
    image: {
        width: 90,
        height: 90
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    icon: {
        marginStart: 10,
    },
    name: {
        fontSize: 16,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold"
    },
    button: {
        borderWidth: 1,
        borderColor: "#CACACA",
        borderRadius: 5,
        padding: 5,
        backgroundColor: "#FFF"
    },
    numItems: {
        paddingHorizontal: 5,
        fontWeight: "bold"
    }
});
