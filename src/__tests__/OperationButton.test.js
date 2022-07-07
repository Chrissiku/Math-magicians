/* eslint-disable react/jsx-props-no-spreading */
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import OperationButton from '../components/component_mocks/OperationButton';

const props = { name: 'Chris', e: jest.fn() };
describe('Testing the Operation Button', () => {
  test('Test Operation button component', () => {
    const TREE = renderer.create(<OperationButton {...props} />).toJSON();
    expect(TREE).toMatchSnapshot();
  });

  it('Test click event', () => {
    render(<OperationButton {...props} />);
    fireEvent.click(screen.getByText(props.name));
    expect(props.e).toHaveBeenCalledTimes(1);
  });
});
