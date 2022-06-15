import React from 'react';
import { Product } from '../types/Product';
import { ProductItem } from './ProductItem';
import './ProductList.scss';

type Props = {
  products: Product[];
};

type State = {

};

export class ProductList extends React.Component<Props, State> {
  state = {
    products: this.props.products,
  };

  render() {
    const { products } = this.state;

    return (
      <>
        <div className="">
          <ul className="ProductList">
            {products.map((product, i) => {
              const {
                id,
                picture,
                discount,
                action,
                description,
                title,
                review,
                price,
                cashback,
                prevPrice,
              } = this.state.products[i];

              return (
                <li
                  key={product.id}
                >
                  <a
                    href="https://www.google.com"
                  >
                    <ProductItem
                      id={id}
                      picture={picture}
                      discount={discount}
                      action={action}
                      description={description}
                      title={title}
                      review={review}
                      price={price}
                      cashback={cashback}
                      prevPrice={prevPrice}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}