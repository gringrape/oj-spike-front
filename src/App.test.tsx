import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('Router', () => {
  it('shows problem page', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/problem']}>
        <App />
      </MemoryRouter>,
    );

    expect(container).toHaveTextContent('문제 : 덧셈');
  });
});
