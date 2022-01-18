import { render } from '@testing-library/react';

import ProblemPage from './ProblemPage';

describe('ProblemPage', () => {
  it('renders title', () => {
    const { container } = render(<ProblemPage />);

    expect(container).toHaveTextContent('문제 : 덧셈');
  });

  it('renders explanation about problem', () => {
    const { container } = render(<ProblemPage />);

    expect(container).toHaveTextContent('두 숫자를 입력받아 결과를 출력하는 함수를 작성하세요.');
  });
});
