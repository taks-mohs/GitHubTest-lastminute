import { View, StyleSheet, Button } from "react-native";
import Animated, {
    useSharedValue,
    withTiming,
    withSpring,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

import MainButton from "../components/MainButton";

function MainPage() {
    const randomWidth = useSharedValue(10);
    const randX = useSharedValue(0);

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(randomWidth.value, config),
            transform: [{translateX: withSpring(randX.value, {stiffness: 100})}]
            //transform: [{translateX: randX.value}]
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, style]} />
            <Button
                title="toggle"
                onPress={() => {
                    randomWidth.value = Math.random() * 350;
                    randX.value = Math.random() * 100;
                    if(Math.random() < .5) {
                        randX.value *= -1;
                    }
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
        backgroundColor: "blue",
        margin: 30
    }
});