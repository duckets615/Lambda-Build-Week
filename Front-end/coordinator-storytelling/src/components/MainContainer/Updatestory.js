import React from "react";

const Updatestory = props =>{
    const { id } = props;
    
    return(
    
        <div>
            <button onClick={() => props.editStory(id)} className="btn delete"name="modify">
                                        Update
            </button>
        </div>

    )
  }

        
export default Updatestory