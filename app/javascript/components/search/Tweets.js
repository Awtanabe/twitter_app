import React from "react"
import Tweet from '../tweets/tweet'


const TAB_TYPES = {
  FOR_YOU: 'for_you',
  COVID_19: 'covid_19',
  TRANDING: 'tranding',
  NEWS: 'news'
}

const tabData = [
  {
    text: 'for_you',
    type: TAB_TYPES.FOR_YOU
  },
  {
    text: 'covid_19',
    type: TAB_TYPES.COVID_19
  },
  {
    text: 'tranding',
    type: TAB_TYPES.TRANDING
  },
  {
    text: 'News',
    type: TAB_TYPES.NEWS
  }
];

const Tabs = ({cuurentTabType, tabData, onClick}) => (
  <ul>
    {tabData.map(tab => (
      <li 
        className={cuurentTabType === tab.type ? 'active' : ''}
        onClick={() => onClick(tab.type)}
      >
       {tab.text}
      </li>
      ))}
  </ul>
)

class Tweets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      initialTweets: [],
      filterdTweets: [],
      value: '',
      image: '',
      cuurentTabType: TAB_TYPES.FOR_YOU
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

  changeTab(tabType) {
    this.setState({cuurentTabType: tabType})
  }

  renderContents() {    
     let body = null
     if (this.state.cuurentTabType =='for_you') {
       body = (<div className="for-you">
          <h3><img src="/assets/search-image-sample.png" width="407" height="200"/></h3>
         </div>
         )
     } else if (this.state.cuurentTabType =='covid_19') {
       body = (<div className="covid-19">covid_19
       </div>)
     } else if (this.state.cuurentTabType == 'tranding') {
       body = (<div className="tranding">tranding
        </div>
       )
     } else if (this.state.cuurentTabType == 'news') {
       body = (    <div className="news">news</div>)
     }
     

    return (body)
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
            <Tabs
              cuurentTabType={this.state.cuurentTabType}
              tabData={tabData}
              onClick={(e) => this.changeTab(e)}
            />
            {this.renderContents()}
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
