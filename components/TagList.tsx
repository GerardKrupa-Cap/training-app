import {StyleSheet, FlatList, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colours, vh} from '../components/SharedStyles';
import FeatureButton from './FeatureButton';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
  },
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

function TagList({baseURL, onSelect}): JSX.Element {
  const [tags, setTags] = useState(['z', 'a']);

  useEffect(() => {
    fetch(`${baseURL}/api/tags`)
      .then(response => response.json())
      .then(data => setTags(data.filter(x => x !== '')));
  }, [baseURL]);

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <FeatureButton
        message={`${item} >`}
        onPress={() => onSelect(item)}
        accessibilityLabel={`Select the tag named ${item}`}
        testID={item}
      />
    </View>
  );

  return (
    <FlatList data={tags} renderItem={renderItem} keyExtractor={item => item} />
  );
}

export default TagList;
