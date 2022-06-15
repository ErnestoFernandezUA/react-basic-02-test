import React from 'react';
import './ProductItem.scss';

type Props = {
  id: number;
  picture: string;
  discount: number;
  action: string;
  description: string;
  title: string;
  review: number[];
  price: number;
  cashback: number;
  prevPrice: number;
};

type State = {
  onfocus: boolean;
};

export class ProductItem extends React.Component<Props, State> {
  state = {
    onfocus: false,
  };

  onFocus = () => {
    this.setState({ onfocus: true });
  };

  toSeparatePrice = (price: Number) => {
    const reversed = price.toString().split('').reverse();
    let result = '';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < reversed.length; i++) {
      // eslint-disable-next-line no-mixed-operators
      if (i % 3 === 0) {
        result += ' ';
      }

      result += reversed[i];
    }

    return result.split('').reverse().join('').trim();
  };

  render() {
    const {
      id,
      picture,
      discount,
      description,
      action,
      title,
      review,
      price,
      cashback,
      prevPrice,
    } = this.props;

    const picturePath = `../data/img/${picture}`;

    const reviewStarCount
      = Math.floor(review.reduce((a, b) => a + b, 0) / review.length);

    return (
      <a
        onFocus={this.onFocus}
        href="https://www.google.com"
        className="ProductItem"
      >
        {!this.state.onfocus
          ? (
            <p className="ProductItem__id">
              Код товару:
              &nbsp;
              {id}
            </p>
          )
          : '' }

        {/* <p className="ProductItem__id">
          Код товару:
          &nbsp;
          {id}
        </p> */}
        <br />
        <img
          className="ProductItem__picture"
          src="../data/img/1.jpg"
          alt={picturePath}
        />
        <br />
        <p className="ProductItem__discount">
          {`-${discount}%`}
        </p>

        <p className="ProductItem__action">{action}</p>
        <br />
        <p className="ProductItem__description">{description}</p>
        <br />
        <p className="ProductItem__title">{title}</p>
        <br />
        <br />
        <p className="ProductItem__review">
          {`${reviewStarCount} відгуків`}
        </p>
        <br />
        <p className="ProductItem__price-title">Ціна:</p>
        <br />
        <p className="ProductItem__price">
          {`${this.toSeparatePrice(price)} грн`}
        </p>
        <p className="ProductItem__cashback">{`+ ${cashback} грн кешбек`}</p>
        <br />
        {prevPrice}
        {this.state.onfocus ? 'купити' : ''}
      </a>
    );
  }
}
