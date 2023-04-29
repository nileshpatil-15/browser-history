/* eslint-disable prettier/prettier */
import './style.css'

const HistoryItem = props => {
  const {searchDetails, deleted} = props
  const {timeAccessed, logoUrl, id, title, domainUrl} = searchDetails

  const deleting =() => {
    deleted(id)
  }

  return (
    <li className="history-item-container">
      <p className="time">{timeAccessed}</p>
      <div className="flex-container">
        <div className="social-media-logo-container">
          <img className="social-media-logo" src={logoUrl} alt="domain logo" />
        </div>
        <div className="history-name-container"> 
          <p className="title">{title}</p>
          <p className="domainurl">{domainUrl}</p>
        </div>
        <div className="delete-logo-container">
          <button data-testid="delete" type="button" onClick={deleting} className="btn">
            <img
              className="delete-logo"
              alt="delete-logo"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            />
          </button> 
        </div>
      </div>
    </li>

  )

}

export default HistoryItem

