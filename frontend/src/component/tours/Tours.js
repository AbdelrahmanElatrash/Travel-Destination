

const Tours=(props)=>{
    console.log(props.data)
    return (
          <div>
            {props.data.map((item)=>{
                return (
                    <div key={item.ID}>
                        <h3>{item.name}</h3>
                        <img src={item.image} alt={item.name}></img>
                    </div>
                )
            })}
          </div>
    )
}

export default Tours;