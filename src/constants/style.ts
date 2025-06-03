import { colorsType } from './types';

type IColors = {
  [key in colorsType]: string;
};

export const colors: IColors = {
  r000: ' #f64f59',
  softPrimaryColor: '#6D66AA',
  vividPrimaryColor: '#2A1598',
  f300: '#f7f7f7',
  f200: '#f2f2f2',
  f100: '#fafafa',
  f000: '#ffffff',
  g300: '#888383',
  g200: '#e5e5e5',
  g100: '#615B5B',
  g000: '#C4C4C4',
};
