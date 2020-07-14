import React from "react"

const SearchHeader = (props) => (
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
        <input type="text"  placeholder="search word" onChange={props.handleSearch}/>
      </form>
    </div>
  </div>
</div>
)

export default SearchHeader

