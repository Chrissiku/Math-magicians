/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import SpanTwo from '../components/component_mocks/DigitButton';

const props = { name: 'Chris', e: jest.fn() };
describe('Test span two button', () => {
  test('Test Span two Button component', () => {
    const TREE = renderer
      .create(<SpanTwo e={props.e} name={props.name} />)
      .toJSON();

    expect(TREE).toMatchSnapshot();
  });
  it('Test button 0 click event', () => {
    render(<SpanTwo {...props} />);
    fireEvent.click(screen.getByText(props.name));
    expect(props.e).toHaveBeenCalled();
    expect(props.e).toHaveBeenCalledTimes(1);
  });
});
