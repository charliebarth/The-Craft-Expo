import Craft from "./craft"
import {Link} from 'react-router-dom'
// import uuid from 'react-uuid'

export default function Crafts( crafts ) {
   //console.log(crafts.crafts[0].name)
    const renderCrafts = () => {
        return crafts.crafts.map(craft => { 
        return <Craft craft={craft} /> 
        })
    }
//console.log(crafts)
//   const renderCrafts = () => {
//     return crafts.demos.map(c => <Link to={`/crafts/${c.name.toLowerCase().replace(/[ ]/g, '-')}`} component={DemoCraft craft={craft}}>{c.name}</Link>)
//   }

  
  return (
    <div id="crafts-list">

      <div/>

      <h2>Your Archive:</h2>

      <div/>

      {renderCrafts()}

    </div>
  )
}