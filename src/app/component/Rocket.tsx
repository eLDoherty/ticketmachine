'use client';

import { useEffect, useState } from 'react';
import '../styles/components/rocket.scss';
import Image from 'next/image';
import RocketIcon from "../../../public/icons/rocket.svg";

const Rocket = () => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const randomDuration = Math.random() * 10 + 10;

    setStyle({
      position: 'absolute',
      bottom: '30%',
      left: '0',
      animation: `rocket-move ${randomDuration}s linear infinite`,
      zIndex: 0,
    });
  }, []);

  return (
    <div className="rocket" style={style}>
        <RocketIcon />
    </div>
  );
};

export default Rocket;
