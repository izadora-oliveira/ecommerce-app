import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import usuario from "../../assets/images/usuario_icone.png";
import cosmeticos from "../../assets/images/cosmeticos.png";
import SectionHeader from "../../components/SectionHeader";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useOfertas } from "../../hooks/useOfertas";
import Anuncios from "./components/Anuncios";
import Ofertas from "./components/Ofertas";

function Home() {
    const { loggedUser } = useContext(GlobalContext);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.container}
        >
            <View style={styles.header}>
                <View>
                    <Text>Bem-vindo!</Text>
                    <Text style={styles.userName}>@{loggedUser.username}</Text>
                </View>

                <Image source={usuario} style={styles.userIcon} />
            </View>

            <Anuncios /> 
            <Ofertas />

            <View style={styles.cta}>
                <View>
                    <Text style={styles.tituloCta}>Obtenha R$ 100 OFF</Text>
                    <Text style={styles.text}>Gaste no mínimo R$ 100 para obter entrega gratuita e voucher promocioanl para a sua próxima compra.</Text>
                    <Pressable onPress={() => { }} style={styles.buttonCta}>
                        <Text style={styles.textButtonCta}>Comprar</Text>
                    </Pressable>
                </View>
                <Image source={cosmeticos} style={styles.imageCta} />
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
    },
    userName: {
        marginTop: 5,
        fontSize: 18,
        fontWeight: "bold"
    },
    userIcon: {
        width: 50,
        height: 50
    },
    ofertas: {
        flexDirection: "row",
        marginVertical: 15
    },
    imageOfertas: {
        width: 220,
        height: 220,
        marginStart: -10,
        borderRadius: 20
    },
    cta: {
        marginVertical: 15,
        backgroundColor: "#FFA959",
        borderRadius: 10,
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    tituloCta: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold"
    },
    imageCta: {
        marginTop: 15,
        width: 100,
        height: 100
    },
    buttonCta: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#FFF',
        width: 100,
        marginTop: 10
    },
    textButtonCta: {
        textAlign: "center",
        fontWeight: "bold"
    }
})


export default Home;