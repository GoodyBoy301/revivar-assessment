/* eslint-disable @next/next/no-img-element */
import React from "react";
import type { FC } from "react";
import Styles from "./index.module.css";
import { selectFunction, downloadFunction } from "../../types/functions.types";

const indexes: string[] = ["One", "Two", "Three", "Four"];

interface Props {
  name: string;
  src: string;
  index: number;
  type: "select" | "download";
  onClick: selectFunction;
  download: downloadFunction;
}

const ImagePreview: FC<Props> = ({
  name,
  src,
  index,
  type,
  onClick,
  download,
}) => {
  const imageContainer: string =
    type === "select" ? Styles.imageContainer : Styles.tyImageContainer;
  const action: string = type === "select" ? "Select" : "Download Card";

  return (
    <div className={imageContainer}>
      <figure className={Styles.card}>
        <p className={Styles.thanks}>Thank You</p>
        <img
          src={src}
          alt=""
          className={Styles.image}
          onClick={onClick}
          data-option
        />
        <p className={Styles.username}>{name}</p>
      </figure>
      <div className={Styles.details}>
        <p className={Styles.name}> {indexes[index]}</p>
        <p className={Styles.select} onClick={download}>
          {action}
        </p>
      </div>
    </div>
  );
};

export default ImagePreview;
