import React from "react";
import "./Avatars.css";
import Avatar from "../Avatar/Avatar";

class Avatars extends React.Component {
  render() {
    return (
      <div className="avatars">
        {this.props.avatars.map((avatar) => (
          <Avatar
            key={avatar.login.uuid}
            name={avatar.name.first + " " + avatar.name.last}
            url={avatar.picture.large}
            desctiption={`${avatar.name.first} ${avatar.name.last} avatar`}
          />
        ))}
      </div>
    );
  }
}

export default Avatars;
