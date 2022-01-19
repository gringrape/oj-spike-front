import { fireEvent, render } from '@testing-library/react';

import ProblemPage from './ProblemPage';

const CODE = 'code';

jest.mock('react', () => {
  const original = jest.requireActual('react');

  return {
    ...original,
    useState: () => [CODE],
  };
});

describe('ProblemPage', () => {
  const mockLog = jest.fn();

  beforeAll(() => {
    console.log = mockLog;
  });

  it('renders title', () => {
    const { container } = render(<ProblemPage />);

    expect(container).toHaveTextContent('문제 : 덧셈');
  });

  it('renders explanation about problem', () => {
    const { container } = render(<ProblemPage />);

    expect(container).toHaveTextContent('두 숫자를 입력받아 결과를 출력하는 함수를 작성하세요.');
  });

  it('renders submit button', () => {
    const { queryByText } = render(<ProblemPage />);

    expect(queryByText('submit')).not.toBeNull();
  });

  it('listens click submit button', () => {
    const { getByText } = render(<ProblemPage />);

    fireEvent.click(getByText('submit'));

    expect(console.log).toBeCalledWith(CODE);
  });
});
