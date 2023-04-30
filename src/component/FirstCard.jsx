import Card from 'react-bootstrap/Card';

function KitchenSinkExample() {
  return (
    <>
      <div className="d-flex justify-content-between name container mt-4">
          <h2>Trending Now</h2>
           <button className ="view_all">View All</button>
      </div>
     <div className="container d-flex ">
    <Card className="box m-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.fnp.com/assets/images/custom/new-desk-home/shop-by-cat/SBB-Desk_Rose_24apr.jpg" />
    </Card>
    
    <Card className="box m-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.fnp.com/assets/images/custom/for-her-2023/by_types/Flower_web_2.jpg" />
    </Card>
    <Card className="box m-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.fnp.com/assets/images/custom/for-her-2023/by_types/Chocolate_web.jpg" />
    </Card>
    <Card className="box m-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.fnp.com/assets/images/custom/for-her-2023/by_types/Combos_web.jpg" />
    </Card>
    <Card className="box m-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.fnp.com/assets/images/custom/new-desk-home/mothers-day/2023/Category-row_cakes_web.jpg" />
    </Card>
    <Card className="box m-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.fnp.com/images/pr/l/v20221214145641/chocolate-truffle-cream-cake-half-kg_1.jpg
      " />
    </Card>
    </div>
    <div className=" box_first m-1 mt-4">
        <img src="https://www.fnp.com/assets/images/custom/new-desk-home/offer-banners/New-arrival-gift-1-desk-8-sept-2022.jpg" alt="" />
    </div>
    </>
  );
}

export default KitchenSinkExample;