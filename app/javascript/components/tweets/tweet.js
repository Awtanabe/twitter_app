import React from "react"
class Tweet extends React.Component {
  renderImage(){
    return (<div>{/*画像があれば表示する*/}</div>)
  }
  render() {
    console.log(this.props.tweet)

    return (
      <div key={this.props.tweet.id} className="tweet">
        <div className="image text-center">
          <img src="assets/icon.png"/>
        </div>
        <div className="body">
          <p>
            {this.props.tweet.body}
          </p>
          {this.renderImage()}
          <div className="footer">
            <ul>
              <li><i className="fa fa-search"></i></li>
              <li><i className="fa fa-search"></i></li>
              <li><i className="fa fa-search"></i></li>
              <li><i className="fa fa-search"></i></li>
            </ul>
　         </div>
        </div>
      </div>
    )
  }
}

export default Tweet
