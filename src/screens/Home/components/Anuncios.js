import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useAnuncios } from "../../../hooks/useAnuncios";
import celular from "../../../assets/images/celular_1.png";

function Anuncios() {
    const [anuncios] = useAnuncios();

    return (
        <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {anuncios?.map((anuncio, indice) => (
                    <View style={styles.card} key={indice}>
                        <View>
                            <Text style={styles.title}>{anuncio.title}</Text>
                            <Text style={styles.text}>{anuncio.text}</Text>
                            <Pressable onPress={() => { }} style={styles.button}>
                                <Text style={styles.textButton}>{anuncio.textButton}</Text>
                            </Pressable>
                        </View>
                        <Image source={celular} style={styles.image} />
                    </View>
                ))}
            </ScrollView>
    )
}

export default Anuncios;

const styles = StyleSheet.create({
    card: {
        marginEnd: 5,
        marginVertical: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    title: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    text: {
        marginTop: 5,
        maxWidth: 175
    },
    button: {
        backgroundColor: "#FFA959",
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA959",
        width: 120,
        marginTop: 5
    },
    textButton: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "bold"
    },
    image: {
        marginTop: 5,
        width: 100,
        height: 100
    },
})