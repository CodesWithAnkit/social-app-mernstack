import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import "./Model.css";

const ModelOverlay = props => {
  const content = (
    <div className={`model ${props.className}`} style={props.style}>
      <header className={`model__header ${props.headerClass}`}>
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : event => event.preventDefault
        }
      >
        <div className={`model__content ${props.contentClass}`}>
          {props.children}
        </div>
        <footer className={`model__footer ${props.footerClass}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );
  ReactDOM.createPortal(content, document.getElementById("model-hook"));
};

const Model = props => {
  return <div></div>;
};

export default Model;
