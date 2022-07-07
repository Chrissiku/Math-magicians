import renderer from 'react-test-renderer';
import SpanTwo from '../components/component_mocks/DigitButton';

const props = { name: 'Chris', e: jest.fn() };
test('Test Span two Button component', () => {
  const TREE = renderer
    .create(<SpanTwo e={props.e} name={props.name} />)
    .toJSON();

  expect(TREE).toMatchSnapshot();
});
