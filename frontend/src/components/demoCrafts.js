import DemoCraft from "./demoCraft"
import {Link} from 'react-router-dom'
// import uuid from 'react-uuid'

export default function DemoCrafts( crafts ) {
   //console.log(crafts.crafts[0].name)
    const renderCrafts = () => {
        return crafts.demos.map(craft => { 
        return <DemoCraft craft={craft} /> 
        })
    }
//console.log(crafts)
//   const renderCrafts = () => {
//     return crafts.demos.map(c => <Link to={`/crafts/${c.name.toLowerCase().replace(/[ ]/g, '-')}`} component={DemoCraft craft={craft}}>{c.name}</Link>)
//   }

  
  return (
    <div id="crafts-list">

      <div/>

      <h2>All Crafts:</h2>

      <div/>

      {renderCrafts()}

    </div>
  )
}

// key={uuid()}