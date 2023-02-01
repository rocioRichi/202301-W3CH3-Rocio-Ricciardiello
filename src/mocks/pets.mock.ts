import { Pet, PetStructure } from '../models/pet';

export const PETS: PetStructure[] = [
  {
    id: '164983',
    namePet: 'Sun',
    owner: 'Rocio',
    breed: 'Gato',
    isAdopted: false,
  },
  new Pet('Pirata', 'Gato', 'Alejandro'),
  new Pet('Garfield', 'Gato', 'Jon'),
  new Pet('Niebla', 'perro', 'Heidi'),
];
