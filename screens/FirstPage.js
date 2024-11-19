import { View, StyleSheet } from "react-native";

import MainButton from "../components/MainButton";

function MainPage() {
    return (
        <View style={styles.container}>
            <MainButton>Main Page</MainButton>
            <MainButton>Second Page</MainButton>
            <MainButton>Third Page</MainButton>
        </View>
    );
}

export default MainPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaaaaa',
        justifyContent: 'center'
    }
});