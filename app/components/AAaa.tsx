'use client'
import React, {useState} from 'react';
import Image from "next/image";

interface Props {
  categories: any
}

const AAaa = (props: Props) => {
  const [a, setA] = useState(1)

  return (
    <div>
      <div>
        Test
      </div>

      <div>
        {props.categories}
      </div>

      <image
        href={'/2.jpeg'}
        width="64"
        height="64"
      />

      <div>{a}</div>
      <button onClick={() =>setA(prevState => prevState + 1)}>Click</button>

    </div>
  );
};

export default AAaa;