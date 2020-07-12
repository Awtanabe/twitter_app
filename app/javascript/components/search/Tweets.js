import React from "react"
import Tweet from '../tweets/tweet'

class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialTweets: [],
      filterdTweets: [],
      value: '',
      image: ''
    }
  }

  componentDidMount() {
    this.setState({
      initialTweets: this.props.tweets,
      filterdTweets: this.props.tweets
    })
  }

  handleSearch(e) {
    const keyword = e.target.value
    const tweets = this.state.initialTweets
    const filterd_tweets = tweets.filter((tweet) => tweet.body.includes(keyword))      
    this.setState({filterdTweets: filterd_tweets})  
  }

  render () {
    const { filterdTweets } = this.state

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
                  <img src="/assets/icon.png"/>
                </div>
                <form>
                  <input type="text"  placeholder="search word" onChange={(e) => this.handleSearch(e)}/>
                </form>
              </div>
            </div>

          </div>
          <div className="main-topicts">
            <ul>
              <li>for you</li>
              <li>covid-19</li>
              <li>tranding</li>
              <li>news</li>
            </ul>
            <div className="for-you">
            <h3><img src="/assets/search-image-sample.png" width="407" height="200"/></h3>

            </div>
            <div className="covid-19">

            </div>
            <div className="tranding">

            </div>
            <div className="news">
            </div>
          </div>
          <div className="tweets">
            {filterdTweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet}/>)}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Tweets
