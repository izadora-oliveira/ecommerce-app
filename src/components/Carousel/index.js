import { useState } from "react";
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function Carousel({ images }) {
    const [activeImage, setActiveImage] = useState(0);

    const handleOnScroll = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

            setActiveImage(slide)
        }
    }

    return (
        <View>
                
            <View>
                <ScrollView
                    horizontal
                    style={styles.container}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={({ nativeEvent }) => handleOnScroll(nativeEvent)}
                >
                    {
                        images.map((image, indice) => {
                            return (
                                <Image
                                    source={image}
                                    key={indice}
                                    style={styles.container}
                                />
                            )
                        })
                    }
                </ScrollView>

                <View style={styles.dotGroup}>
                    {
                        images.map((_, indice) => {
                            return (
                                <EntypoIcon
                                    name="dot-single"
                                    size={40}
                                    style={(indice === activeImage) ? styles.dotActive : styles.dot}
                                    key={indice}
                                />
                            )
                        })
                    }
                </View>
            </View>
            <View style={styles.row}>
                {
                    images.map((image, indice) => {
                        return (
                            <Pressable onPress={() => setActiveImage(indice)} key={indice}>
                                <Image source={image} style={(indice === activeImage) ? styles.thumbnailActive : styles.thumbnail} />
                            </Pressable>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default Carousel;

const styles = StyleSheet.create({
    container: {
        width: WIDTH,
        height: HEIGHT * 0.60,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 25,
        marginTop: 15
    },
    dotGroup: {
        position: "absolute",
        flexDirection: "row",
        alignSelf: "center",
        bottom: 0
    },
    dot: {
        marginVertical: 5,
        color: "#CACACA",
    },
    dotActive: {
        marginVertical: 5,
        color: "#FFA959",
    },
    thumbnail: {
        width: 70,
        height: 70,
        borderRadius: 5,
    },
    thumbnailActive: {
        width: 70,
        height: 70,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#FFA959",
    },
});