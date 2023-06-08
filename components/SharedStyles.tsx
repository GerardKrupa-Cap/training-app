import {ColorValue, OpaqueColorValue, Platform, PlatformColor, StyleSheet} from 'react-native';

function systemColour(
  iosColour: string,
  androidColour: string,
  fallback: string,
): ColorValue {
  const result = Platform.select<ColorValue>({
    ios: PlatformColor(iosColour),
    android: PlatformColor(androidColour),
    default: fallback,
  });
  return result;
}

export const SharedStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    color: systemColour('link', '?android:attr/textColor', 'white'),
    backgroundColor: systemColour(
      'systemTealColor',
      '@android:color/holo_blue_bright',
      'blue',
    ),
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
