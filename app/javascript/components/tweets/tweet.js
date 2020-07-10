import React from "react"
class Tweet extends React.Component {
  renderImage(image){
    const url = image.url == null ? null : image.url
    if (url) {
      return (<p><img src={url}/></p>)
    }
  }
  render() {
    return (
      <div key={this.props.tweet.id} className="tweet">
        <div className="image text-center">
          <img src="assets/icon.png"/>
        </div>
        <div className="body">
         <div className="header">
           <p>
            {this.props.tweet.body}
          </p>
          {this.renderImage(this.props.tweet.image)}
         </div>
          <ul>
            <li><i className="fa fa-search"></i></li>
            <li><i className="fa fa-search"></i></li>
            <li><i className="fa fa-search"></i></li>
            <li><i className="fa fa-search"></i></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Tweet
