import React from "react";

export default function Img({ frontImg, backImg, name }) {
  return (
    <>
      <div>
        <img src={frontImg} alt="name" width={150} height={150} />
        <img src={backImg} alt="name" width={150} height={150} />
      </div>
      <span>{name}</span>
    </>
  );
}
