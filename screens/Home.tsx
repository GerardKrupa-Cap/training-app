import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Button,
} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {SharedStyles} from '../components/SharedStyles';
import StandardHeader from '../components/StandardHeader';
import StandardFooter from '../components/StandardFooter';
import FeatureButton from '../components/FeatureButton';

function Home({navigation}): JSX.Element {
  const [shown, setShown] = useState(true);

  function toggleText() {
    setShown(!shown);
  }

  function navigateAway() {
    navigation.navigate('Other');
  }

  return (
    <View style={SharedStyles.screenContainer}>
      <StandardHeader />
      <View style={SharedStyles.body}>
        {shown && <Text style={styles.message}>Nothing to see here</Text>}
        {!shown && (
          <Text style={styles.message}>Still nothing to see here</Text>
        )}
        <FeatureButton message="Do not click here" onPress={toggleText} testID="changeText" accessibilityLabel="Click here to change the text" />
        <FeatureButton message="Bye bye" onPress={navigateAway} testID="navigateAway" accessibilityLabel="Click here to go to the other screen" />
      </View>
      <StandardFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  message: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Home;
