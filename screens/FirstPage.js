import { View, StyleSheet, Button } from "react-native";
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

import MainButton from "../components/MainButton";

function MainPage() {
    const randomWidth = useSharedValue(10);

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(randomWidth.value, config),
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, style]} />
            <Button
                title="toggle"
                onPress={() => {
                    randomWidth.value = Math.random() * 350;
                }}
            />
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
    },
    box: {
        width: 100,
        height: 80,
        backgroundColor: "black",
        margin: 30
    }
});