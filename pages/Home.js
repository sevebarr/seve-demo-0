import { StyleSheet, Pressable, Text, View, SafeAreaView } from 'react-native';
import '../styles'

const Home = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Pricing')}>
                <View style={styles.container} >
                    <Text style={styles.text}>App</Text>
                </View>
            </Pressable>
        </SafeAreaView>
    )
}
export default Home

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