import React from "react";
import type { FC } from "react";
import ImagePreview from "@components/ImagePreview";
import Styles from "./index.module.css";
import Layout from "@defaults/Layout";
import {
  randomizerFunction,
  selectFunction,
} from "../../types/functions.types";
import { image } from "@customtypes/objects.types";

const randomizer: randomizerFunction = (index) => {
  const options = document.querySelectorAll(
    "[data-option]"
  ) as NodeListOf<HTMLImageElement>;
  const random: number = Math.floor(Math.random() * 4);
  const chosen: HTMLImageElement = options[index || random];
  chosen.click();
};

interface Props {
  selectImage: selectFunction;
  images: image[];
}

const Select: FC<Props> = ({ selectImage, images }) => {
  return (
    <Layout title="TYIG" description="">
      <section className={Styles.homePage}>
        <h1 className={Styles.heading}>
          Thank Youuu
          <br />
          Image Generator
        </h1>

        <div className={Styles.heroText}>
          <p>
            Select an image from the four images below. This image will be used
            to generate you a Thank You Image
          </p>
          <p className={Styles.randomizer} onClick={() => randomizer(null)}>
            Select one, randomly for me &#8594;
          </p>
        </div>
      </section>

      <section className={Styles.imagesWrapper}>
        {images.map(({ index, url }) => {
          return (
            <ImagePreview
              key={index}
              name=""
              src={url}
              index={index}
              type="select"
              onClick={selectImage}
              download={() => randomizer(index)}
            />
          );
        })}
      </section>

      <section>
        <button
          className={Styles.randomizerButton}
          onClick={() => randomizer(null)}
        >
          Select Randomly
        </button>
      </section>
    </Layout>
  );
};

export default Select;
