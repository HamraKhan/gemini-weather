import renderer from 'react-test-renderer';
import Navbar from './navbar/navbar';

describe('navbar', () => {
  test.only('should render successfully', () => {
    const screen = renderer.create(<Navbar />).toJSON()
    expect(screen.children.length).toBe(3)
  })
})
