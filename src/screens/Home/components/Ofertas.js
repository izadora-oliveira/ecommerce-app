import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import SectionHeader from "../../../components/SectionHeader";
import { useOfertas } from "../../../hooks/useOfertas";

function Ofertas() {
    const [ofertas] = useOfertas();

    return (
        <>
            <SectionHeader title={"Ofertas Incríveis"} />

            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
            >
                {ofertas?.map((oferta, indice) => (
                    <Pressable onPress={() => { }} key={indice}>
                        <Image source={oferta.image} style={styles.imageOfertas} />
                    </Pressable>
                ))}
            </ScrollView>
        </>
    )
}

export default Ofertas;

const styles = StyleSheet.create({
    imageOfertas: {
        width: 220,
        height: 220,
        marginStart: -10,
        borderRadius: 20
    },
})