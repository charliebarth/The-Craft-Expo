import { Link } from 'react-router-dom'

export default function DemoCraft({ craft }) {

  const renderDescription = () => {
    if (craft.description) {
      return <p className="craft-description">{craft.description}</p>
    }
  }

  return (
    <Link to={`/crafts/${craft.name.toLowerCase()}`} className="craft-link" >
      <div className="craft-text">
        <h2 className="craft-title">{craft.name}</h2>
        {renderDescription()}
      </div>
    </Link>
  )
}