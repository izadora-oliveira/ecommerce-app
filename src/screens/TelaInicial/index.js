import { Image, StyleSheet, Text, Pressable, View, ScrollView } from "react-native";
import image from "../../assets/images/tela_inicial.png";
import { useNavigation } from "@react-navigation/native";

function TelaInicial() {
    const navigation = useNavigation();




    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image source={image} style={styles.image} />
            <Text style={styles.title}>Todas as suas compras num só app!</Text>
            <Text style={styles.subtitle}>Venda seus produtos da maneira mais inteligente e
                rápida para obter dinheiro imediato e uma consciência mais limpa. </Text>

            <View style={styles.buttonGroup}>
                <Pressable onPress={() => navigation.navigate("Login")} style={styles.button}>
                    <Text style={styles.textButton}>Log In</Text>
                </Pressable>

                <Pressable onPress={() => { }} style={styles.buttonOutline}>
                    <Text style={styles.textButtonOutline}>Sign Up</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 100,
        width: 360,
        height: 360
    },
    title: {
        margin: 25,
        marginBottom: 15,
        fontSize: 30,
        maxWidth: 310,
    },
    subtitle: {
        margin: 25,
        marginTop: 0,
        fontSize: 16,
        maxWidth: 310,
    },
    button: {
        backgroundColor: "#FF7A00",
        margin: 25,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 100,
    },
    textButton: {
        textAlign: "center",
        color: "#FFF",
        fontWeight: "bold"
    },
    buttonOutline: {
        backgroundColor: "#FFF",
        margin: 25,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FF7A00",
        width: 100
    },
    textButtonOutline: {
        textAlign: "center",
        color: "#FF7A00",
        fontWeight: "bold"
    },
    buttonGroup: {
        flexDirection: "row",
        marginTop: 25,
        justifyContent: "space-between"
    }
})

export default TelaInicial;