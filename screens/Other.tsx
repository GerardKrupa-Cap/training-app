import {Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedStyles} from '../components/SharedStyles';
import FeatureButton from '../components/FeatureButton';

function Other({navigation}): JSX.Element {
  function navigateAway() {
    navigation.navigate('Home');
  }

  return (
    <View style={SharedStyles.screenContainer}>
      <FeatureButton message="Go Home" onPress={navigateAway} testID="navigateHome" accessibilityLabel="Click here to go back to the home screen" />
    </View>
  );
}

export default Other;
