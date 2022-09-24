import * as Font from "expo-font";

const useFonts = async () => {
  await Font.loadAsync({
      'Inter-Black': require('../../assets/fonts/Inter-Black.ttf'),
      'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
      'Inter-Extra-Bold': require('../../assets/fonts/Inter-ExtraBold.ttf'),
      'Inter-Extra-Light': require('../../assets/fonts/Inter-ExtraLight.ttf'),
      'Inter-Light': require('../../assets/fonts/Inter-Light.ttf'),
      'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
      'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
      'Inter-Semi-Bold': require('../../assets/fonts/Inter-SemiBold.ttf'),
      'Inter-Thin': require('../../assets/fonts/Inter-Thin.ttf')
  });
};

export default useFonts;