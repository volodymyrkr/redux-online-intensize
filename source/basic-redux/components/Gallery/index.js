// Core
import React, { Component } from "react";
import { hot } from "react-hot-loader";

// Instruments
import Styles from "./styles.m.css";

//store
import { store } from "../../init/store";

@hot(module)
export default class Gallery extends Component {
  render () {
    const { photos, selectedPhotoIndex } = store.getState().gallery;
    const selectedPhoto = photos.find((_, index) => index===selectedPhotoIndex);

    return (
      <section className = { Styles.gallery }>
        <img src = { selectedPhoto.url } />
        <div>
          <button>←</button>
          <button className = { Styles.buttonActive } value = '0'>1</button>
          <button value = '1'>2</button>
          <button value = '2'>3</button>
          <button value = '3'>4</button>
          <button>→</button>
          </div>
        </section>
    );
  }
}
