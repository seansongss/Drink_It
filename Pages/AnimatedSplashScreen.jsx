import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { Animated, StyleSheet, View, Image } from 'react-native';
import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';

function AnimatedSplashScreen({ children }) {
    const image = require("../assets/main-logo.png");
    const animation = useMemo(() => new Animated.Value(1), []);
    const [isAppReady, setAppReady] = useState(false);
    const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAppReady(true);
        }, 2000);

        return () => clearTimeout(timer); // Clear timeout if component unmounts
    }, []);

    useEffect(() => {
        if (isAppReady) {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setAnimationComplete(true));
        }
    }, [isAppReady]);

    const onImageLoaded = useCallback(async () => {
        try {
            await SplashScreen.hideAsync();
            // Load stuff
            // await Promise.all([]);
        } catch (e) {
            // handle errors
        }
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {isAppReady && children}
            {!isSplashAnimationComplete && (
                <Animated.View
                    pointerEvents="none"
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            backgroundColor: Constants.expoConfig.splash.backgroundColor,
                            opacity: animation,
                        },
                    ]}
                >
                    <Image
                        style={{
                            width: "100%",
                            height: "100%",
                            resizeMode: "contain",
                        }}
                        source={image}
                        onLoadEnd={onImageLoaded}
                        fadeDuration={0}
                    />
                </Animated.View>
            )}
        </View>
    );
}