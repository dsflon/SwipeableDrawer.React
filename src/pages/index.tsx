import {
  useState,
} from 'react';

import Head from 'next/head';
import styles from './Home.module.css';

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
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SwipeableDrawer</title>
      </Head>

      <h1 className={styles.title}>
        SwipeableDrawer
      </h1>

      {
        Array.from(new Array(40)).map((_, i) => (
          <button
            key={i}
            data-index={i}
            className={`${styles.button} ${styles.card}`}
            onClick={() => setOpened(true)}
          />
        ))
      }

      {/* SwipeableDrawer */}
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
        <>
          <div className={styles.card} />

          <section className={styles.box}>
            <p>テキストが入ります。テキストが入ります。テキストが入ります。</p>

            <ul className={styles.flip}>
              <li>横スクロール</li>
              <li>横スクロール</li>
              <li>横スクロール</li>
              <li>横スクロール</li>
              <li>横スクロール</li>
            </ul>
          </section>

          <section className={styles.box}>
            テキストが入ります。テキストが入ります。テキストが入ります。
          </section>

          <section className={styles.box}>
            テキストが入ります。テキストが入ります。テキストが入ります。
          </section>

          <section className={styles.box}>
            テキストが入ります。テキストが入ります。テキストが入ります。
          </section>
        </>
      </SwipeableDrawer>
      {/* SwipeableDrawer */}
    </main>
  );
}
