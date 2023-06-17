// Write your code here
import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  getRegistrationStatus = () => {
    const {setActiveEventId, eventItem} = this.props
    setActiveEventId(eventItem.id)
  }

  render() {
    const {eventItem} = this.props
    const {imageUrl, name, location} = eventItem
    return (
      <li className="list-element">
        <button
          className="event-button"
          type="button"
          onClick={this.getRegistrationStatus}
        >
          <img src={imageUrl} alt="event" className="event-image" />
        </button>
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </li>
    )
  }
}

export default EventItem
