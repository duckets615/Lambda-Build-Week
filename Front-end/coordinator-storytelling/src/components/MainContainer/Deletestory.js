import React from "react";

const Deletestory = props =>{
    const { id } = props;
    return(
<div>
    <button onClick={() => props.deleteStories(id)} className="btn delete"name="modify">
    Delete
   </button>
</div>

    )
}

export default Deletestory