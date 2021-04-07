export default function viewCraft(props) {

    const title = props.match.params.name
  
    const foundCraft = props.crafts.data.find(craft => craft.attributes.name.toLowerCase().replace(/[ ]/g, "-") === title)
  
    return (
  
      <div id="craft-view">
        {foundCraft
  
          ?

        (<>
          <h2>{foundCraft.attributes.name}</h2>

          <img className="craft-view-image" src={`${foundCraft.attributes.img_url}`} alt="uh oh something went wrong..." />

          <p>{foundCraft.attributes.description}</p>
  
        </>)

          :

          <p>404 Craft Not Found</p>}
      </div>
  
    )
  
  }