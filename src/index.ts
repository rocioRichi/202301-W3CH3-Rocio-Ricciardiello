/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { PETS } from './mocks/pets.mock';
import './index.scss';
import { TASK } from './mocks/tasks';
import { List } from './components/list/list';
import { Pet } from './models/pet';
import { petCard } from './components/petCard/petCard';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Tares', path: '/tasks' },
  { label: 'Acerca de', path: '/about' },
];

console.log('Load sample');
new Header('#root');
new Menu('.header', menuOptions);
new List('main');
const petList: petCard[] = PETS.map((item) => new petCard('.petul', item));
new Footer('#root');
