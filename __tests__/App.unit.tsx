/**
 * @format
 */
import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';

it('changes text when I press the button', () => {
  const component = render(<App />);
  expect(component.queryAllByText('Nothing to see here')).toHaveLength(1);
  expect(component.queryAllByText('Still nothing to see here')).toHaveLength(0);

  fireEvent.press(component.getByText('Do not click here'));

  expect(component.queryAllByText('Nothing to see here')).toHaveLength(0);
  expect(component.queryAllByText('Still nothing to see here')).toHaveLength(1);
});

it('navigates away when I click the bye bye button', () => {
  const component = render(<App />);
  const button = component.getByText('Bye bye');
  fireEvent.press(button);
  expect(component.queryAllByText('Go Home')).toHaveLength(1);
});

it('navigates back when I click the go home button', () => {
  const component = render(<App />);
  fireEvent.press(component.getByText('Bye bye'));
  fireEvent.press(component.getByText('Go Home'));
  expect(component.queryAllByText('Nothing to see here')).toHaveLength(1);
});
