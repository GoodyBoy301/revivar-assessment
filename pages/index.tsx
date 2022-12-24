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
  for (var i = 0; i < count; i++) {
    //refactor
    //Ensure images are always different
    let { url } = await fetch("https://source.unsplash.com/random/300x300");
    images.forEach((img) => {
      if (img.url === url) {
        fetch("https://source.unsplash.com/random/300x300").then((response) => {
          url = response.url;
          images[i] = { index: i, url };
        });
      }
    });
    images.push({ index: i, url });
  }

  return {
    props: {
      images: images,
    },
    revalidate: 10,
  };
};

export default Home;
