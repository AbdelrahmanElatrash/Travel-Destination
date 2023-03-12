
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"

function Tour(props) {
    
    let data = props.tour;
    
    
    return (
        <>
           
            
            <Link key={data.id} style={{textDecorationLine:"none", color:"black"}}  to={`/city/${data.id}`}>
            <Card key={data.id} style={{ width: '18rem'}}>
                <Card.Body>
                    <Card.Title >{data.name}</Card.Title>
                   
                </Card.Body>
                <Card.Img variant="top" src={data.image} />
            </Card>
            </Link>
            
            <hr></hr>
            
            
        </>
    )
}

export default Tour;