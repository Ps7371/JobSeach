import {Stack} from "expo-router"
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();  //mAKES NATIVE SPLASH SCREEN INVISIBLE UNTIL HIDE ASYNC IS CALLED

const Layout=()=>{
const [fontsLoaded]=useFonts({
    DMBold:require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium:require('../assets/fonts/DMSans-Medium.ttf'),
    DMBold:require('../assets/fonts/DMSans-Regular.ttf'),
})

const  onLayoutRootView=useCallback(async()=>{
    if(fontsLoaded){
            await SplashScreen.hideAsync()
    }
},[fontsLoaded])
if(!fontsLoaded) return null;


    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;