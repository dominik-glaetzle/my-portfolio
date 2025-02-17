// @ts-ignore
import Contact from '../src/components/grid/Contact';
import { Layout } from 'react-grid-layout';
import * as React from 'react';

interface GridItem {
  i: string;
  component: React.ComponentType;
}

export const gridItems: GridItem[] = [{ i: 'contact', component: Contact }];

type Layouts = 'lg' | 'md' | 'sm';

export const layouts: { [key in Layouts]: Layout[] } = {
  lg: [{ i: 'contact', x: 2, y: 2, w: 2, h: 1 }],
  md: [{ i: 'contact', x: 2, y: 3, w: 2, h: 2 }],
  sm: [{ i: 'contact', x: 0, y: 9, w: 2, h: 2 }],
};
