import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {vh, vw} from './SharedStyles';

const styles = StyleSheet.create({
  taggedImage: {
    height: vh(40),
    resizeMode: 'contain',
    marginVertical: vh(5),
  },
});

function TaggedItem({baseURL, tag}): JSX.Element {
  const encodedTag = encodeURIComponent(tag);
  const imageUrl = `${baseURL}c/${encodedTag}`;
  return (
    <Image
      testID="taggedImage"
      source={{uri: imageUrl}}
      style={styles.taggedImage}
    />
  );
}

export default TaggedItem;
