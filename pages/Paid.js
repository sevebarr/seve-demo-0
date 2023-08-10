import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import '../styles'

const Paid = ({ navigation }) => {

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: black }}>

            <Pressable onPress={() => navigation.navigate("Home")}>

                <View style={styles.container}>
                    <Text style={styles.text}>Paid</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )
}
export default Paid

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: primary,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: black,
        fontSize: xxlarge,
    },
});