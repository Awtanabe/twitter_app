import React from "react"
import PropTypes from "prop-types"
class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleValue(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSave() {
    const formData = new FormData();
    formData.append("tweet[body]", this.state.value)

    fetch('/tweets', {
      method: 'POST',
      body: formData
    })
    this.setState({value: ''})
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-3">1</div>
          <div className="col-xs-7 main">
            <div className="header">
              <div className="title">
                <h4>Home</h4>
              </div>
              <div className="tweet-form">
                <div className="form-header">
                  <div className="icon">
                    <img src="assets/icon.png"/>
                  </div>
                  <form>
                    <input type="text" value={this.state.value} placeholder="Whats's happing?" onChange={(e) => this.handleValue(e)}/>
                  </form>
                </div>
                <div className="form-fotter">
                  <div>
                    <ul className="links">
                      <li><i className="fa fa-search"></i></li>
                      <li><i className="fa fa-search"></i></li>
                      <li><i className="fa fa-search"></i></li>
                      <li><i className="fa fa-search"></i></li>
                      <li><i className="fa fa-search"></i></li>
                    </ul>
                  </div>
                  <button onClick={()=> this.handleSave()}>Tweet</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweets
