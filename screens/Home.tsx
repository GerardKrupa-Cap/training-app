import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import React from 'react';
import {SharedStyles} from '../components/SharedStyles';
import StandardHeader from '../components/StandardHeader';
import StandardFooter from '../components/StandardFooter';

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
        <TouchableOpacity
          style={SharedStyles.button}
          onPress={toggleText}
          accessible={true}
          accessibilityLabel="Click here to change the text"
          testID="changeText">
          <Text style={styles.message}>Do not click here</Text>
        </TouchableOpacity>
        <TouchableOpacity style={SharedStyles.button} onPress={navigateAway}>
          <Text style={styles.message}>Bye bye</Text>
        </TouchableOpacity>
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
