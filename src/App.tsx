import React from 'react';
import './App.scss';
import { ProductList } from './components/ProductList';
import productsFromServer from './data/data.json';

export const App: React.FC = () => {
  return (
    <div className="App">
      <ProductList products={productsFromServer} />
    </div>
  );
};
