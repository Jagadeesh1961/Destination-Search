import './index.css'

const DestinationItem = props => {
  const {item} = props
  const {name, imgUrl} = item
  return (
    <li className="list-item">
      <img className="place-image" src={imgUrl} alt={name} />
      <p className="place-name">{name}</p>
    </li>
  )
}

export default DestinationItem
