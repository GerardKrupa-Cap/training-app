import {Text, View} from 'react-native';
import React from 'react';
import {SharedStyles} from '../components/SharedStyles';
import StandardHeader from '../components/StandardHeader';
import StandardFooter from '../components/StandardFooter';
import TagList from '../components/TagList';


function Home({navigation}): JSX.Element {



  function selectTag(tag) {
    navigation.navigate('Other', {tag});
  }

  return (
    <View style={SharedStyles.screenContainer}>
      <StandardHeader />
      <View style={SharedStyles.body}>
        <Text style={SharedStyles.h3}>Select a Cat Tag !!</Text>
        <TagList baseURL="https://cataas.com/" onSelect={selectTag} />

      </View>
      <StandardFooter />
    </View>
  );
}

export default Home;
