import DemoCraft from "./demoCraft"
// import uuid from 'react-uuid'

export default function DemoCrafts({ crafts }) {
  
  const renderCrafts = () => {
    return crafts.map(craft => { 
      return <DemoCraft craft={craft} /> 
    })
  }
  
  return (
    <div id="crafts-list-container">
      {renderCrafts()}
    </div>
  )
}

// key={uuid()}