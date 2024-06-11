import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomNav from './BottomNav';
import { useFonts, Jaldi_400Regular, Jaldi_700Bold } from '@expo-google-fonts/jaldi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Hide the splash screen after fetching resources (set to 2 seconds by default)
//  later need edit to hide splash screen after fetching all resources from server
// Add animation when hiding splash screen
setTimeout(async () => {
    await SplashScreen.hideAsync();
}, 2000);

export default function App() {
    // // Clear storage for development purposes
    // useEffect(() => {
    //     const clearStorage = async () => {
    //         try {
    //             await AsyncStorage.clear();
    //             console.log("Storage cleared successfully!");
    //         } catch (error) {
    //             console.error("Error clearing storage: ", error);
    //         }
    //     };

    //     clearStorage();
    // }, []);

    let [fontsLoaded] = useFonts({
        Jaldi_400Regular,
        Jaldi_700Bold,
    });

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#A2B69F' }}>
            <NavigationContainer style={{ flex: 1 }}>
                <BottomNav />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

function AnimatedSplashScreen({ children, image }) {
    const animation = useMemo(() => new Animated.Value(1), []);
    const [isAppReady, setAppReady] = useState(false);
    const [isSplashAnimationComplete, setAnimationComplete] = useState(false);
  
    useEffect(() => {
      if (isAppReady) {
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start(() => setAnimationComplete(true));
      }
    }, [isAppReady]);
  
    const onImageLoaded = useCallback(async () => {
      try {
        await SplashScreen.hideAsync();
        // Load stuff
        await Promise.all([]);
      } catch (e) {
        // handle errors
      } finally {
        setAppReady(true);
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
            <Animated.Image
              style={{
                width: "100%",
                height: "100%",
                resizeMode: Constants.expoConfig.splash.resizeMode || "contain",
                transform: [
                  {
                    scale: animation,
                  },
                ],
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