import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '.';

// background image should be loaded on dashboard page, on page render
describe('dashboardPage', () => {
  test('should render successfully', () => {
    const screen = renderer.create(<Dashboard />).toJSON();
    expect(screen.children.length).toBe(2);
  });

  test('should display background image', () => {
    const screen = renderer.create(<Dashboard />).toJSON();
    expect(screen.children[0].props.alt).toBe('view-of-london');
  });

});