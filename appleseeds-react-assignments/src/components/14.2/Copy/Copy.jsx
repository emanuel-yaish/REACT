import React from "react";

class Copy extends React.Component {
  constructor(props) {
    super(props);

    this.state = { textareaValue: "" };
    this.textareaRef = React.createRef();
  }

  textareaOnChange = (vlaue) => {
    this.setState({ textareaValue: vlaue });
  };

  copy = () => {
    navigator.clipboard.writeText(this.textareaRef.current.value).then(
      function () {
        console.log("copied");
      },
      function (err) {
        console.log(err);
      }
    );
  };

  render() {
    return (
      <div>
        <textarea
          onChange={({ target }) => this.textareaOnChange(target.value)}
          value={this.textareaValue}
          placeholder="enter text to copy"
          ref={this.textareaRef}
        ></textarea>
        <input onClick={this.copy} type="button" value="copy" />
      </div>
    );
  }
}

export default Copy;
