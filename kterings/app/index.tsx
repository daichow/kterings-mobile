import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import * as Font from 'expo-font';
import OnboardingComponent from '../components/screens/Onboarding';
import Constants from 'expo-constants';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';


export default function App() {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'TT Chocolates Trial Regular': require('../assets/fonts/TT Chocolates Trial Regular.otf'),
                'TT Chocolates Trial Bold': require('../assets/fonts/TT Chocolates Trial Bold.otf'),
                'TT Chocolates Trial Medium': require('../assets/fonts/TT Chocolates Trial Medium.otf'),
            });
            setFontsLoaded(true);
        }

        loadFonts();
    }, []);

    if (!fontsLoaded) {
        return null; // You can show a loading indicator here if necessary
    }

    return (
        <View style={styles.container}>
            <SignedOut>
                <OnboardingComponent />
            </SignedOut>

            <SignedIn>
                <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
                    <Text>Hello</Text>
                </View>
            </SignedIn>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
