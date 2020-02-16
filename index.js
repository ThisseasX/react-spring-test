import React from 'react';
import { render } from 'react-dom';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import './index.css';

const App = () => {
  const [{ xy }, set] = useSpring(() => ({
    xy: [0, 0],
    config: {
      mass: 3,
      tension: 250,
      friction: 15,
    },
  }));

  const bind = useDrag(({ down, movement }) => {
    set({ xy: down ? movement : [0, 0] });
  });

  return (
    <animated.div
      {...bind()}
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
    />
  );
};

render(<App />, document.getElementById('root'));
