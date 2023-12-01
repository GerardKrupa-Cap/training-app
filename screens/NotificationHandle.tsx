import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SharedStyles} from '../components/SharedStyles';
import FeatureButton from '../components/FeatureButton';
import StandardHeader from '../components/StandardHeader';
import StandardFooter from '../components/StandardFooter';
import TaggedItem from '../components/TaggedItem';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

function NotificationHandle({route, navigation}): JSX.Element {
  function navigateAway() {
    navigation.navigate('Home');
  }

  const {property1, property2} = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={SharedStyles.screenContainer}>
      <StandardHeader />
      <View style={SharedStyles.body}>
        <Text style={SharedStyles.h3}>Notification Received</Text>
        <Text style={SharedStyles.h4}>Property 1: {property1}</Text>
        <Text style={SharedStyles.h4}>Property 2: {property2}</Text>
        <FeatureButton
          message="Go Home"
          onPress={navigateAway}
          testID="test:id/navigate-home"
          accessibilityLabel="Click here to go back to the home screen"
        />
      </View>
      <StandardFooter />
    </View>
  );
}

export default NotificationHandle;
