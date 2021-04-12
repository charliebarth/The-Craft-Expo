import { Link } from 'react-router-dom'
import { getUserId } from '../redux/actions/userActions'
import { postCraft } from '../services/api'

export default function Craft( craft ) {
  //console.log(craft)
  const title = craft.craft.name
  
//   const handleClick = event => {
//     event.preventDefault()
//     getUserId()
//     postCraft(craft.craft)
//   }
  
  //const foundCraft = craft.find(craft => craft.name.toLowerCase().replace(/[ ]/g, "-") === title)

  return (

    <div id="craft-view">
        <h2>{title}</h2>

        <img className="craft-view-image" src={`${craft.craft.img_url}`} alt="uh oh something went wrong..." />

        <p>{craft.craft.description}</p>
        {/* <button onClick={handleClick}>Add To Your Archive</button> */}
    </div>

  )

}