import React, { useState } from "react";
import "./Text.css";

function Text({ text, maximumLength }) {
  const [readMore, setReadMore] = useState(false);

  const readMoreText = () => {
    return (
      <div>
        {truncate(text, maximumLength, "...")}
        <span className="read" onClick={updateReadMore}>
          read more
        </span>
      </div>
    );
  };

  const readLessText = () => {
    return (
      <div>
        {truncate(text, text.length, " ")}
        <span className="read" onClick={updateReadMore}>
          show Less
        </span>
        ;
      </div>
    );
  };

  const getTextByState = () => {
    if (readMore) {
      return readMoreText();
    }

    return readLessText();
  };

  const getText = () => {
    // text smaller than maximum length
    if (text.length < maximumLength) return <div>{text}</div>;
    // text larger than maximum length
    return getTextByState();
  };

  const truncate = (str, max, suffix) =>
    str.length < max
      ? str
      : `${str.substr(
          0,
          str.substr(0, max - suffix.length).lastIndexOf(" ")
        )}${suffix}`;

  const updateReadMore = () => {
    setReadMore(!readMore);
  };

  return <div className="text">{getText()}</div>;
}

export default Text;
