// Seu código aqui!

const products = [
  {
    id: 1,
    name: 'Iphone 11',
    tags: ['smartphone', 'tech', 'apple']
  },
    {
    id: 2,
    name: 'Macbook Pro',
    tags: ['laptop', 'tech', 'apple']
  },
    {
    id: 3,
    name: 'JBL Headphones',
    tags: ['headphone', 'tech', 'jbl']
  },
    {
    id: 4,
    name: 'Nike Shorts',
    tags: ['shorts', 'clothing', 'nike']
  },
];

function filterProducts(category) {

const novaArray = []

for (let i = 0 ; i < products.length; i++){
  if (products[i].tags[2] === category){
      novaArray.push(products[i])
} else {
  continue
}
}
  console.log(novaArray)
}
filterProducts('apple')
