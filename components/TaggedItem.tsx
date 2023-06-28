import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {vh, vw} from './SharedStyles';

const styles = StyleSheet.create({
  taggedImage: {
    height: vh(40),
    resizeMode: 'contain',
    marginHorizontal: vw(5),
    marginTop: vw(5),
  },
});

function TaggedItem({baseURL, tag}): JSX.Element {
  const encodedTag = encodeURIComponent(tag);
  const imageUrl = `${baseURL}c/${encodedTag}`;
  return (
    <Image
      testID="test:id/tagged-image"
      source={{uri: imageUrl}}
      style={styles.taggedImage}
    />
  );
}

export default TaggedItem;
