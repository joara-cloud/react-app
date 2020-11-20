import React from 'react';

const foodILike = [
  {
    name: 'kimchi',
    price: 9000
  },
  {
    name: 'ramen',
    price: 4500
  },
  {
    name: 'pizza',
    price: 21900
  }
];

foodILike.map(dish => {
  console.log(dish.name);
})

function App() {
  return ( // 반환값이 많아지면 소괄호 감싸야함. 지우지않게 주의
    <div>
      <Food />
    </div>
  );
}
function Food() {
	return <h3> sdfsdf </h3>;
}

export default App;