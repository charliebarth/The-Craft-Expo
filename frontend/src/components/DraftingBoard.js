import { Link } from 'react-router-dom'

export default function CraftList({crafts}) {

  const renderCrafts = () => {
    console.log(Array.isArray(crafts.data))
    return crafts.data.map(c => <Link to={`/crafts/${c.attributes.name.toLowerCase().replace(/[ ]/g, '-')}`}>{c.attributes.name}</Link>)
  }

  return (

    <div id="crafts-list">

      <div/>

      <h2>All Crafts:</h2>

      <div/>

      {renderCrafts()}

    </div>

  )

}