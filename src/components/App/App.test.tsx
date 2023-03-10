import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import App from '.';

describe('App', async () => {
  it('should render app title', () => {
    const { getByText } = render(<App />);

    expect(getByText('App')).toBeInTheDocument();
  });
});
