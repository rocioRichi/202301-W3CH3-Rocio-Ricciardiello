import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { petCard } from './petCard';

describe('Given petCard component', () => {
  test('should first', () => {
    document.body.innerHTML = '<ul></ul>';

    const element = new petCard('ul', {
      id: '164983',
      namePet: 'Sun',
      owner: 'Rocio',
      breed: 'Gato',
      isAdopted: false,
    });
    expect(element).toBeInstanceOf(petCard);
    const li = screen.getByRole('listItem');
    expect(li).toBeInTheDocument();
  });
});
