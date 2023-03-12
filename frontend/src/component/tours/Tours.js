import Tour from "./tour/Tour"
 

const Tours=(props)=>{
    
    return (
          <>
          {props.data.map((item)=>{
                return (
                    <Tour tour={item}/>
                    // <div key={item.ID}>
                    //     <h3>{item.name}</h3>
                    //     <img src={item.image} alt={item.name}></img>
                    // </div>
                )
            })}
          </>
            
          
    )
}

export default Tours;