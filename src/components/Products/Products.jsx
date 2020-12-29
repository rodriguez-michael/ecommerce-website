import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
  { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'http://via.placeholder.com/150/FF0000/FFFFFF?text=Shoes' },
  { id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image: 'http://via.placeholder.com/150/0000FF/FFFFFF?text=Macbook' },
];

const Products = () => {
  return(
    <main>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
