import React from "react";
import type { FC } from "react";
import ImagePreview from "@components/ImagePreview";
import Styles from "./index.module.css";
import Layout from "@defaults/Layout";
import { downloadFunction, inputFunction } from "../../types/functions.types";

interface Props {
  imageUrl: string;
  name: string;
  updateName: inputFunction;
  download: downloadFunction;
}

const Download: FC<Props> = ({ imageUrl, name, updateName, download }) => {
  return (
    <Layout title="Download Image" description="">
      <div className={Styles.downloadPage}>
        <section className={Styles.details}>
          <h1 className={Styles.heading}>
            Thank You for
            <br />
            Generating Image
          </h1>

          <div className={Styles.prompt}>
            <p>
              What is your name? <br /> we forgot to ask, earlier.
            </p>
            <input
              className={Styles.nameInput}
              maxLength={12}
              value={name}
              onChange={updateName}
            />
          </div>
        </section>

        <section className={Styles.imagesWrapper}>
          <ImagePreview
            name={name}
            src={imageUrl}
            type="download"
            onClick={() => {}}
            download={download}
          />
        </section>

        <section className={Styles.utils}>
          <button className={Styles.downloadButton} onClick={download}>
            Download Card
          </button>
        </section>
      </div>
    </Layout>
  );
};

export default Download;
