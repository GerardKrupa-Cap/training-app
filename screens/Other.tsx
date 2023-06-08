import {Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedStyles} from '../components/SharedStyles';

function Other({navigation}): JSX.Element {
  function navigateAway() {
    navigation.navigate('Home');
  }

  return (
    <View style={SharedStyles.screenContainer}>
      <TouchableOpacity style={SharedStyles.button} onPress={navigateAway}>
        <Text style={SharedStyles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Other;
