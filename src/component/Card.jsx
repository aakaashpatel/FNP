import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup className=" mt-5 mb-4">
      <Card className="box_third m-4">
        <Card.Img variant="top" src="https://www.fnp.com/images/pr/l/v20221012122334/milt-sansevieria-plant-oval-jar-terrarium_1.jpg" />
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="box_third m-4">
        <Card.Img variant="top" src="https://www.fnp.com/images/pr/l/v20230404060417/money-plant-in-lucky-to-have-you-glass-pot-hand-delivery_1.jpg" />
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
        
      </Card>
      <Card className="box_third m-4">
        <Card.Img variant="top" src="https://www.fnp.com/images/pr/l/v20221012122339/spider-plant-cylindrical-vase-terrarium_1.jpg" />
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;