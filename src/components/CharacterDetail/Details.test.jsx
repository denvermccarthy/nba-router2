import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';
import { CharacterProvider } from '../../context/CharacterContext';

describe('end to end tests', () => {
  test('details page should render properly', async () => {
    render(
      <MemoryRouter initialEntries={['/home/1']}>
        <CharacterProvider>
          <App />
        </CharacterProvider>
      </MemoryRouter>
    );
    const rickTitle = await screen.findByText('Rick Sanchez');
    const img = screen.getByAltText('image of Rick Sanchez');
    const goBack = screen.getByText('Go Back');
  });
});
