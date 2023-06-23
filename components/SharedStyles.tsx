import {
  ColorValue,
  Platform,
  PlatformColor,
  StyleSheet,
  Dimensions,
} from 'react-native';

export const colours = {
  $charcoal: '#323232',
  $black: '#1f1f1f',
  $darkgrey: '#666666',
  $midgrey: '#999999',
  $lightgrey: '#b5b5b5',
  $white: '#ffffff',
};

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

export function vw(percentage: number): number {
  return (Dimensions.get('window').width * percentage) / 100;
}

export function vh(percentage: number): number {
  return (Dimensions.get('window').height * percentage) / 100;
}

export const SharedStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  body: {
    flex: 10,
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
