import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colours, vh, vw} from '../components/SharedStyles';

const logo = require('../assets/cat-logo.png');

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignContent: 'flex-start',
    flexDirection: 'row',
    paddingVertical: vw(3),
    paddingHorizontal: vh(3),
    backgroundColor: colours.$charcoal,
    width: '100%',
    maxHeight: vh(12),
  },
  headerLogo: {
    flex: 1,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    paddingRight: vw(2),
    borderRightColor: colours.$lightgrey,
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  headerLabel: {
    flex: 5,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: vw(2),
  },
  headerText: {
    fontSize: vh(1.8),
    color: 'white',
    paddingLeft: vw(2),
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

function StandardHeader(): JSX.Element {
  return (
    <View style={styles.header}>
      <View style={styles.headerLogo}>
        <Image source={logo} style={styles.headerImage} />
      </View>
      <View style={styles.headerLabel}>
        <Text style={styles.headerText}>Anifeiliaid Anwes ar Hap</Text>
        <Text style={styles.headerText}>Random Pet Works</Text>
      </View>
    </View>
  );
}

export default StandardHeader;
