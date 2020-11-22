import React from 'react';

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    price: 9000,
    ratind: 5
  },
  {
    id: 2,
    name: 'ramen',
    price: 4500,
    ratind: 3
  },
  {
    id: 3,
    name: 'pizza',
    price: 21900,
    ratind: 4
  }
];

function App() {
  return (
    <div>
      {
        foodILike.map( (dish) => (
          <Food name={dish.name} price={dish.price} key={dish.id} />
        ))
      }
    </div>
  );
}
function Food({ name, price }) {
	return (
    <div>
      <h3>I like {name}</h3>
      <p>price : {price}</p>
    </div>
  );
}

export default App;