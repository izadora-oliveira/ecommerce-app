import { useContext, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../contexts/GlobalContext";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { setLoggedUser } = useContext(GlobalContext);

    const handleLogin = () => {
        // TODO: Chamada à API de Autenticação
        // Salvar esse usuário autenticado no estado global "loggedUser"
        setLoggedUser({ username, password });
        navigation.navigate("Bottom Tab Routes");
    }

    return (
        <>
            <View style={styles.box}></View>
            <View style={styles.container}>
                <Text style={[styles.title, styles.text]}>Bem-vindo(a)!</Text>
                <View style={styles.row}>
                    <Text style={styles.text}>Não possui uma conta? </Text>
                    <Text style={[styles.text, styles.link]}>Sign Up</Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Nome do Usuário"
                    onChange={(event) => {
                        setUsername(event.target.value)
                    }}
                />

                <View style={[styles.row, styles.password]}>
                    <TextInput
                        secureTextEntry={!showPassword}
                        placeholder="Senha"
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                    />

                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                        <Ionicon name={showPassword ? "eye-off" : "eye"} size={20} color={"#FF7A00"} />
                    </Pressable>
                </View>

                <Pressable style={styles.button} onPress={handleLogin}>
                    <Text style={styles.textButton}>Login</Text>
                </Pressable>

                <Checkbox
                    style={styles.checkbox}
                    value={true}
                    onValueChange={() => { }}
                    color={true ? "#FFA700" : ""}
                />
            </View>
        </>
    )
}

export default Login;

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#FF7A00",
        height: 200,
        width: Dimensions.get("screen").width
    },
    container: {
        margin: 25
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
    },
    text: {
        fontSize: 18,
        marginBottom: 10
    },
    link: {
        color: "#FF7A00"
    },
    input: {
        marginVertical: 10,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#CACACA",
        borderEndColor: "#FFF",
        borderEndWidth: 0,
        padding: 10,
        backgroundColor: "#FFF"
    },
    password: {
        justifyContent: "space-between",
        marginVertical: 10,
        height: 50,
        padding: 10,
        backgroundColor: "#FFF",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#CACACA"
    },
    button: {
        backgroundColor: "#FF7A00",
        borderRadius: 10,
        height: 50,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    }
});