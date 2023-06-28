import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SharedStyles} from '../components/SharedStyles';
import FeatureButton from '../components/FeatureButton';
import StandardHeader from '../components/StandardHeader';
import StandardFooter from '../components/StandardFooter';
import TaggedItem from '../components/TaggedItem';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

function Other({route, navigation}): JSX.Element {
  function navigateAway() {
    navigation.navigate('Home');
  }

  const {tag} = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  return (
    <View style={SharedStyles.screenContainer}>
      <StandardHeader />
      <View style={SharedStyles.body}>
        <Text style={SharedStyles.h3}>Random Cat</Text>
        <Text style={SharedStyles.h4}>Tag: {tag}</Text>
        <FeatureButton
          message="Go Home"
          onPress={navigateAway}
          testID="navigateHome"
          accessibilityLabel="Click here to go back to the home screen"
        />

        <SafeAreaView style={styles.container}>
          <ScrollView style={{height: '100%'}}>
            <TaggedItem baseURL="https://cataas.com/" tag={tag} />
          </ScrollView>
        </SafeAreaView>
      </View>
      <StandardFooter />
    </View>
  );
}

export default Other;
