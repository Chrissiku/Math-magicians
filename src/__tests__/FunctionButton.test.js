/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FunctionButton from '../components/component_mocks/FunctionButton';

const props = { name: 'Chris', e: jest.fn() };

describe('Test Function Butoons', () => {
  test('Test Function Button component', () => {
    const TREE = renderer.create(<FunctionButton {...props} />).toJSON();
    expect(TREE).toMatchSnapshot();
  });

  it('Test the function button click', () => {
    render(<FunctionButton {...props} />);
    fireEvent.click(screen.getByText(props.name));
    expect(props.e).toHaveBeenCalledTimes(1);
  });
});
