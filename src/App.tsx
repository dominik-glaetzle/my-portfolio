import Container from '../src/components/layout/Container';
import Grid from '../src/components/layout/Grid';
import { gridItems, layouts } from '../config/GridLayout';
import * as React from 'react';

interface GridItem {
  i: string;
  component: React.ElementType;
}

export default function Home() {
  return (
    <>
      <Container as="header" className="flex items-center justify-between py-0">
        <h1 className="hidden">Dominik Glätzle</h1>
      </Container>
      <main className="py-8">
        <Grid layouts={layouts}>
          {gridItems.map((item: GridItem) => {
            const Component = item.component;
            return (
              <div key={item.i}>
                <Component />
              </div>
            );
          })}
        </Grid>
      </main>
    </>
  );
}
