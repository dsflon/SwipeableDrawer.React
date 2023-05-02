# SwipeableDrawer

## Development

### Install
```bash
$ cd /path/to/pitpet/services/frontend
$ npm install
```

### Run
```bash
$ cd /path/to/project

# serve with hot reload at localhost:3000
$ npm run dev
```

### Usage

``` tsx
import { useState } from 'react';

import { SwipeableDrawer } from '~/components/SwipeableDrawer';

export default function Home() {
  const [opened, setOpened] = useState(false);

  const beforeEnter = () => {
    console.log('beforeEnter');
  };

  const afterEnter = () => {
    console.log('afterEnter');
  };

  const beforeLeave = () => {
    console.log('beforeLeave');
  };

  const afterLeave = () => {
    console.log('afterLeave');
  };

  const scrollDrawer = () => {
    console.log('scrollDrawer');
  };

  return (
    <>
      <button
        onClick={() => setOpened(true)}
      />

      <SwipeableDrawer
        opened={opened}
        speed={300}
        easingType = 'easeOutCubic'
        onClose={() => setOpened(false)}
        onBeforeEnter={() => beforeEnter()}
        onAfterEnter={() => afterEnter()}
        onBeforeLeave={() => beforeLeave()}
        onAfterLeave={() => afterLeave()}
        onScroll={() => scrollDrawer()}
      >
        <div>
          contents
        </div>
      </SwipeableDrawer>
    </>
  );
}
```
