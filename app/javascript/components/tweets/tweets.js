import React from "react"
import PropTypes from "prop-types"
import Tweet from './tweet'
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [],
      value: '',
      image: '',
      disabled: true,
      showEmoji: true
    }
  }


  componentDidMount() {
    this.setState({
      tweets: this.props.tweets
    })
  }

  handleValue(e) {
    const inputValue = e.target.value
    if (inputValue.length > 0) {
      this.setState({
        value: e.target.value,
        disabled: false
      })  
    } else {
      this.setState({
        value: e.target.value,
        disabled: true
      })
    }
  }

  addEmoji(e) {
    let emoji = e.native
    this.setState({
      value: this.state.value + emoji
    })
  }

  showEmoji(e) {
    this.setState({showEmoji: !this.state.showEmoji})
  }

  handleImage(e) {
    this.setState({image: e.target.files[0]})
  }

  handleSave() {
    const formData = new FormData();
    formData.append("tweet[body]", this.state.value)
    formData.append("tweet[image]", this.state.image)
    
    fetch('/tweets', {
      method: 'POST',
      body: formData
    })
    const newTweets =  Object.assign([],this.state.tweets) 

    newTweets[`${this.state.tweets.length}`] = {id: this.state.tweets.length + 1, body: this.state.value}
    this.setState({tweets: newTweets,value: ''})
  }

  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-3 sidebar">
            <ul className="side-links">
              <li><i className="fa fa-search"></i></li>
              <li><i className="fa fa-search"></i></li>
              <li><i className="fa fa-search"></i></li>
              <li><i className="fa fa-search"></i></li>
              <li><i className="fa fa-search"></i></li>
              <li><i className="fa fa-search"></i></li>
            </ul>
          </div>
          <div className="col-xs-7 main">
            <div className="header">
              <div className="title" id="header-title">
                <h4>Home</h4>
              </div>
              <div className="tweet-form">
                <div className="form-header">
                  <div className="icon">
                    <img src="assets/icon.png"/>
                  </div>
                  <form>
                    <input type="text" value={this.state.value} placeholder="Whats's happing?" onChange={(e) => this.handleValue(e)}/>
                    <div className={this.state.showEmoji ? 'disabled' : ''}>
                      <Picker disableSearchBar={true} onSelect={(emoji) => this.addEmoji(emoji)}/>
                    </div>
                  </form>
                </div>
                <div className="form-fotter">
                  <div>
                    <ul className="links">
                      <li>
                        <label className="fa fa-image">
                          <input type="file" className="disabled" onChange={(e) => this.handleImage(e)}/>
                        </label>
                      </li>
                      <li><i className="fa fa-meh-o" onClick={(e) => this.showEmoji(e)}></i></li>
                      <li><i className="fa fa-search"></i></li>
                      <li><i className="fa fa-search"></i></li>
                      <li><i className="fa fa-search"></i></li>
                    </ul>
                  </div>
                  <button onClick={()=> this.handleSave()} disabled={this.state.disabled}>Tweet</button>
                </div>
              </div>

            </div>
            <div className="tweets">
              {this.state.tweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tweets
