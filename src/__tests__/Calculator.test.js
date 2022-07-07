import renderer from 'react-test-renderer';
import { Calculator } from '../components/Calculator';

describe('Testing Calculator', () => {
  it('Testing component with snapshot', () => {
    const DOMTREE = renderer.create(<Calculator />).toJSON();

    expect(DOMTREE).toMatchSnapshot();
  });
});
