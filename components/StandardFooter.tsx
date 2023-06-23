import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colours, vh, vw} from './SharedStyles';

const logo = require('../assets/cat-logo.png');

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    alignContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: vh(3),
    paddingBottom: vh(2),
    paddingHorizontal: vh(2),
    backgroundColor: colours.$lightgrey,
    width: '100%',
    maxHeight: vh(10),
  },
  footerLogo: {
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    paddingRight: vw(2),
    borderRightColor: colours.$charcoal,
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  footerLabel: {
    flex: 5,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: vw(2),
  },
  footerText: {
    fontSize: vh(1.4),
    color: colours.$charcoal,
    paddingLeft: vw(2),
  },
  footerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

function StandardFooter(): JSX.Element {
  return (
    <View style={styles.footer}>
      <View style={styles.footerLogo}>
        <Image source={logo} style={styles.footerImage} />
      </View>
      <View style={styles.footerLabel}>
        <Text style={styles.footerText}>Anifeiliaid Anwes ar Hap</Text>
        <Text style={styles.footerText}>Random Pet Works</Text>
      </View>
    </View>
  );
}

export default StandardFooter;
