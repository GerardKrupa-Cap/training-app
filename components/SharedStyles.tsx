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

  $lightgrey_dark: '#cccccc',
  $lightgrey_mid: '#dddddd',
  $lightgrey_semi: '#e5e5e5',
  $lightgrey_light: '#eeeeee',
  $lightgrey_offwhite: '#f1f1f1',

  $darkred: '#7e0a0e',
  $red: '#aa1111',
  $brightred: '#d81f1f',
  $darkpalered: '#d87777',
  $palered: '#fea8a9',
  $whitered: '#ffe4e5',

  $darkblue: '#1f446d',
  $blue: '#0360a6',
  $brightblue: '#4c93ff',
  $lightblue: '#3b7dc5',
  $paleblue: '#99ccff',

  $darkgreen: '#3b510d',
  $green: '#019e1e',
  $lightgreen: '#01b723',
  $whitegreen: '#cdf7d4',

  $darkpurple: '#772cfe',
  $plum: '#632a5d',
  $purple: '#a82b71',

  $orange: '#ff8000',
  $paleorange: '#ffdab5',

  $yellow: '#ffd530',
  $paleyellow: '#fff5ce',

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
    flex: 1,
  },
  h3: {
    fontSize: vh(5),
    color: colours.$black,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: vh(3),
    color: colours.$black,
    fontWeight: 'bold',
  },
});
