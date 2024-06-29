import { useEffect, useState, useMemo } from "react";
import { View, Animated, Easing } from "react-native";

const ProgressBar = ({ data, animateDuration = 1000, barHeight = 8, shouldAnimate = true, style }) => {
    const [progressData, setProgressData] = useState([]);
    const animation = useMemo(() => new Animated.Value(0), []);

    useEffect(() => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            // easing: Easing.linear,
            useNativeDriver: true,
        }).start();

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
    }, []);

    const animatedValues = progressData.map(d => {
        return animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", `${d.progress * 100}%`]
        });
    });

    console.log(data);
    console.log(progressData);

    return (
        <View
            style={[
                {
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 16,
                    marginBottom: 16 + barHeight,
                    width: "100%",
                    height: barHeight,
                    borderRadius: 5,
                    borderWidth: 1,
                },
                style
            ]}
        >
            {progressData.map((d, i) => {
                console.log(d.progress * 100);
                return (
                    <Animated.View
                        key={i}
                        style={{
                            display: "flex",
                            flex: d.progress,
                            height: barHeight || 8,
                            backgroundColor: d.color,
                            opacity: animation
                        }}
                    />
                );
            })}
        </View>
    );
};

export default ProgressBar;
