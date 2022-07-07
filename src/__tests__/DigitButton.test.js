/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DigitButton from '../components/component_mocks/DigitButton';

const props = { name: 'Chris', e: jest.fn() };

describe("Digit Button testing", () => {
  test('Test Digit Button component', () => {
    const TREE = renderer.create(<DigitButton {...props} />).toJSON();
    expect(TREE).toMatchSnapshot();
  });

  it("Test click event", () => {
    render(<DigitButton {...props} />);
    fireEvent.click(screen.getByText(props.name));
    expect(props.e).toHaveBeenCalledTimes(1);
  });

});

