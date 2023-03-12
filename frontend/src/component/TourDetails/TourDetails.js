import { useParams } from 'react-router-dom'

import Card from 'react-bootstrap/Card';



function TourDetails(props) {

    const params = useParams();
    const id = params.id;

    const data = props.data;

    const item=data.filter((item) => {
            if (item.id === id) {
                return item;
            } 
        })

        
        const tour=item[0];

    return (
        <>
            <Card key={tour.id}className="text-center">
                <Card.Header>id:{tour.id} city:{tour.name}</Card.Header>
                <Card.Body>
                    <Card.Title>{tour.name}</Card.Title>
                    <Card.Text>
                       {tour.info}
                    </Card.Text>
                    <Card.Img variant="top" src={tour.image} />
                </Card.Body>
                <Card.Footer className="text-muted">price:{tour.price}</Card.Footer>
            </Card>
        </>
    )
}

export default TourDetails;