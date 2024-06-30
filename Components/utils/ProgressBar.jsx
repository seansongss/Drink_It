import { useEffect, useState, useMemo } from "react";
import { View, Animated, Easing } from "react-native";

const ProgressBar = ({ data, animateDuration = 1000, shouldAnimate = true, style }) => {
    const [progressData, setProgressData] = useState([]);
    const animation = useMemo(() => new Animated.Value(0), []);

    useEffect(() => {
        let totalProgress = data.reduce((acc, d) => acc + d.progress, 0);
        let value = 0;
        let processedData = data.map(d => {
            value = d.progress / totalProgress;
            return {
                progress: value,
                color: d.color
            };
        });

        setProgressData(processedData);

        // Start the animation after setting the processed data
        Animated.timing(animation, {
            toValue: 1,
            duration: animateDuration,
            easing: Easing.linear,
            useNativeDriver: false, // Set to false since we're animating width
        }).start();
    }, [data, animateDuration, animation]);

    const animatedValues = progressData.map(d => {
        return animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", `${d.progress * 100}%`]
        });
    });

    console.log(progressData);

    return (
        <View
            style={[
                {
                    display: "flex",
                    flexDirection: "row",
                    borderWidth: 1,
                    overflow: 'hidden' // Ensure children do not overflow the rounded container
                },
                style
            ]}
        >
            {progressData.map((d, i) => {
                return (
                    <Animated.View
                        key={i}
                        style={{
                            width: animatedValues[i],
                            height: '100%',
                            backgroundColor: d.color,
                        }}
                    />
                );
            })}
        </View>
    );
};

export default ProgressBar;
