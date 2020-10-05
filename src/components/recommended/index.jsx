import React from 'react';
import GetRecommended from './RelatedOutFits/GetRecommended';
import GetCurrentCart from './CurrentCart/GetCurrentCart';
// const Recomended = () => (
//   <h1>Hello World</h1>
// );

class Recomended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id } = this.props;
    const { cart } = this.props;

    return (
      <div className="recommended">
        <div className="RelatedOutFits">
          <GetRecommended id={id} />
        </div>
        <div className={"currentCartContainer"}>
          <GetCurrentCart cart={[{ id: 2 }, { id: 4 }]} />
        </div>

      </div>
    );
  }
}
/*
we are going to have a div which will be our container for our component
<div >
  this will hold another 2 divs becuase we have recommended and currentOutFit
  RELATED OUTFITS
  <div className='recommended>
    and inside this div we will have RELATED products to the one currently being displayed!

    1)Display all the products related
    how do we get the related products? well first off
    we have props and that props has a cart and that cart has an id of products
    we go through the cart grab the id and foreach id we have to call axios
    to get the related/recommended products THEN display those
  </div>

  CURRENTOUTFIT/ YOUR OUTFIT -
  <div className='currentOutFit>

  we have the current cart - and in this cart we will have divs that have each product in it

  step 1) will be to display current OutFit'S!

  </div>

</div
*/

export default Recomended;
