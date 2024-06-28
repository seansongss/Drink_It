import React, { useEffect, useState } from "react";
import { View, Animated, Easing } from "react-native";

const ProgressBar = ({ data, animateDuration = 1000, barHeight = 8, shouldAnimate = true, style }) => {
    const [progressData, setProgressData] = useState([]);
    const animatedValue = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: animateDuration,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

        let totalProgress = data.reduce((acc, d) => acc + d.progress, 0);
        let value = 0;
        let processedData = data.map(d => {
            value += (d.progress / totalProgress) * 100;
            return {
                progress: value,
                color: d.color
            };
        });
        // processedData = processedData.reverse();
        setProgressData(processedData);
    }, [data, animateDuration]);

    const animatedValues = progressData.map(d => {
        return animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", `${d.progress}%`]
        });
    });

    console.log(data);
    console.log(progressData);
    console.log(animatedValues);

    return (
        <View
            style={[
                {
                    position: "relative",
                    flexDirection: "row",
                    marginTop: 16,
                    marginBottom: 16 + barHeight,
                    width: "100%",
                    borderWidth: 1,
                    height: barHeight,
                },
                style
            ]}
        >
            {progressData.map((d, i) => (
                <Animated.View
                    key={i}
                    style={{
                        position: "absolute",
                        height: barHeight,
                        width: shouldAnimate ? animatedValues[i] : `${d.progress}%`,
                        backgroundColor: d.color,
                        borderRadius: 5
                    }}
                />
            ))}
            {console.log(animatedValues)}
        </View>
    );
};

export default ProgressBar;
