import {Component} from 'react'
import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeUserInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const searchResults = destinationsList.filter(eachCard =>
      eachCard.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            value={searchInput}
            className="input-type"
            placeholder="Search"
            onChange={this.onChangeUserInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-icon"
          />
        </div>
        <ul className="ul-container">
          {searchResults.map(eachCard => (
            <DestinationItem item={eachCard} key={eachCard.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
