import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-4">4</div>
          <div className="col-xs-8">8</div>
        </div>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};
export default HelloWorld
