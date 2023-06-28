/**
 * @format
 */
import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

it('has a button for each valid tag returned', async () => {
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return new Promise((resolve, _) => {
      resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(['one', 'two', 'three', 'box of frogs']),
      });
    });
  });

  const component = render(<App />);

  await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

  expect(component.queryAllByText('one >')).toHaveLength(1);
  expect(component.queryAllByText('two >')).toHaveLength(1);
  expect(component.queryAllByText('three >')).toHaveLength(1);
  expect(component.queryAllByText('four >')).toHaveLength(0);
  expect(component.queryAllByText('box of frogs >')).toHaveLength(0);
});

it('displays a random image when I select a tag', async () => {
  global.fetch = jest.fn().mockImplementationOnce(() => {
    return new Promise((resolve, _) => {
      resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(['one', 'two', 'three']),
      });
    });
  });

  const component = render(<App />);

  await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));

  const button = component.getByText('one >');
  fireEvent.press(button);
  expect(component.queryAllByTestId('taggedImage')).toHaveLength(1);
  const image = component.getByTestId('taggedImage');
  expect(image.props.source.uri).toBe('https://cataas.com/c/one');
});
