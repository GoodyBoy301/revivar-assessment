import type { GetStaticProps, NextPage } from "next";
import React, { useState } from "react";
import Select from "@components/Select";
import Download from "@components/Download";
import {
  downloadFunction,
  inputFunction,
  selectFunction,
} from "../types/functions.types";
import domtoimage from "dom-to-image";
import { image } from "@customtypes/objects.types";

interface Props {
  images: image[];
}

const Home: NextPage<Props> = ({ images }) => {
  const [name, setName] = useState<string>("Goody");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const selectImage: selectFunction = (event) => {
    const target = event.target as HTMLImageElement;
    setImageUrl(target.src);
  };

  const updateName: inputFunction = (event) => {
    const target = event.target as HTMLInputElement;
    setName(target.value);
  };

  const download: downloadFunction = async (event) => {
    const target = event.target as HTMLButtonElement | HTMLParagraphElement;
    try {
      const figure = document.querySelector("figure") as Node;
      const dataUrl: string = await domtoimage.toJpeg(figure);
      const link = document.createElement("a");
      link.download = "thank-you-revivar.jpg";
      link.href = dataUrl;
      link.click();

      target.innerHTML = "Downloaded!";
    } catch (err) {
      target.innerHTML = "Can't download!";
    }
  };

  if (imageUrl)
    return (
      <Download
        imageUrl={imageUrl}
        name={name}
        updateName={updateName}
        download={download}
      />
    );
  else return <Select selectImage={selectImage} images={images} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const count: number = 4;
  const images: image[] = [];
  //refactor
  //Ensure images are always different
  const alphabets: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "x",
    "y",
    "z",
  ];
  for (var i = 0; i < count; i++) {
    const randomAlphabet: string = alphabets[Math.floor(Math.random() * 26)];
    let { url } = await fetch(
      `https://source.unsplash.com/random/300x300?${randomAlphabet}}`
    );
    images.push({ index: i, url });
  }

  return {
    props: {
      images: images,
    },
    revalidate: 1,
  };
};

export default Home;
