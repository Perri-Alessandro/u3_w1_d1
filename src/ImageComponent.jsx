import { Component } from "react";

class Img extends Component {
  render() {
    const { src, alt } = this.props;
    return <img src={src} alt={alt} />;
  }
}
export default Img;
