import { screen, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';

describe('end to end tests', () => {
  test('should be able to navigate to details and back', async () => {
    render(
      <MemoryRouter>
        <CharacterProvider>
          <App />
        </CharacterProvider>
      </MemoryRouter>
    );
    const rick = await screen.findByText('Rick Sanchez');
    const morty = screen.getByText('Morty Smith');
    expect(morty).toBeInTheDocument();

    userEvent.click(rick);

    await waitFor(() => {
      const morty = screen.queryByText('Morty Smith');
      expect(morty).toBeNull();
    });

    const backButton = screen.getByText('Go Back');
    userEvent.click(backButton);

    const morty2 = await screen.findByText('Morty Smith');
    expect(morty2).toBeInTheDocument();
  });
});
