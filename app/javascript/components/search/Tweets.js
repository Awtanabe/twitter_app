import React from "react"
import Tweet from '../tweets/tweet'
import SideBar from '../layout/SideBar'
import SearchHeader from '../layout/SearchHeader'

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
    this.handleSearch = this.handleSearch.bind(this)
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
       body = (
       <div>
            <div className="for-you">
                <h3><img src="/assets/search-image-sample.png" width="407" height="200"/></h3>
            </div>
            <div className="tweets">
              {this.state.filterdTweets.map((tweet) => <Tweet key={tweet.id} tweet={tweet}/>)}
            </div>
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
    return (
      <div className="container">
      <div className="row">
        <SideBar/>
        <div className="col-xs-7 main">
          <SearchHeader handleSearch={this.handleSearch}/>
          <div className="main-topicts">
            <Tabs
              cuurentTabType={this.state.cuurentTabType}
              tabData={tabData}
              onClick={(e) => this.changeTab(e)}
            />
            {this.renderContents()}
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Tweets
