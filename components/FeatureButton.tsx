import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {SharedStyles, colours, vh} from '../components/SharedStyles';

const styles = StyleSheet.create({
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: vh(1),
    marginVertical: vh(1),
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  pressed: {
    backgroundColor: colours.$blue,
    borderColor: colours.$blue,
    color: colours.$white,
  },
  unpressed: {
    backgroundColor: colours.$white,
    borderColor: colours.$blue,
    color: colours.$blue,
  },
  text: {
    fontSize: vh(2),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

/*
        <Pressable
          style={({pressed}) => pressed ? SharedStyles.featureButtonPressed : SharedStyles.featureButton}
          onPress={toggleText}
          accessible={true}
          accessibilityLabel="Click here to change the text"
          testID="changeText">
            {({pressed}) => (
              pressed ? (<Text style={SharedStyles.featureButtonTextPressed}>Do not click here</Text>) : (<Text style={SharedStyles.featureButtonText}>Do not click here</Text>)
            )
          }
        </Pressable>
        */

function FeatureButton({message, onPress, testID, accessibilityLabel}): JSX.Element {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        pressed ? styles.pressed : styles.unpressed,
      ]}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      accessible={true}>
      {({pressed}) => (
        <Text
          style={[styles.text, pressed ? styles.pressed : styles.unpressed]}>
          {message}
        </Text>
      )}
    </Pressable>
  );
}

export default FeatureButton;
