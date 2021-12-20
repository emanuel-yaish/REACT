import React from "react";

class Focus extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} placeholder="focus" />
      </div>
    );
  }
}
export default Focus;
