import Home from '../components/Home';
import renderer from 'react-test-renderer';

test("Home component testing with snapshot", () => {
    const TREE = renderer.create(<Home />).toJSON();

    expect(TREE).toMatchSnapshot();
});