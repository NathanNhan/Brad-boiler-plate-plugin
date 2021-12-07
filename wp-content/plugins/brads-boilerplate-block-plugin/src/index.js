import "./index.scss"

wp.blocks.registerBlockType("makeupnamespace/make-up-block-name", {
  title: "Brads Boilerplate Block",
  icon: "welcome-learn-more",
  category: "common",
  attributes: {
    skyColor: { type: "string" },
    grassColor: { type: "string" },
    select : {type : "string"}
  },
  edit: EditComponent,
  save: function () {
    return null
  }
})

function EditComponent(props) {
  function updateSkyColor(e) {
    props.setAttributes({ skyColor: e.target.value })
  }

  function updateGrassColor(e) {
    props.setAttributes({ grassColor: e.target.value })
  }
  function handleClick (e){
    props.setAttributes({select: e.target.innerText})
  }

  return (
    <div className="makeUpYourBlockTypeName">
      <input
        type="text"
        value={props.attributes.skyColor}
        onChange={updateSkyColor}
        placeholder="sky color..."
      />
      <input
        type="text"
        value={props.attributes.grassColor}
        onChange={updateGrassColor}
        placeholder="grass color..."
      />
      <p>what is a fast food ?</p>
      <p onClick={handleClick}>Steak</p>     
      <p onClick={handleClick}>Hamburger</p>
      <p onClick={handleClick}>Bread</p>      
    </div>
  );
}
