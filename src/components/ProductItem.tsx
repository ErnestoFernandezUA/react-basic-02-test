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
  hover: boolean;
};

export class ProductItem extends React.Component<Props, State> {
  state = {
    hover: false,
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
        href="https://www.google.com"
        className="ProductItem"
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        {this.state.hover
          ? (
            <p className="ProductItem__id">
              Код товару:
              &nbsp;
              {id}
            </p>
          )
          : '' }
        <img
          className="ProductItem__picture"
          src="../data/img/1.jpg"
          alt={picturePath}
        />

        <div className="ProductItem__box-for-discount">
          <p className="ProductItem__discount">
            {`-${discount}%`}
          </p>

          <p className="ProductItem__action">{action}</p>

        </div>
        <p className="ProductItem__description">{description}</p>

        <p className="ProductItem__title">{title}</p>

        <p className="ProductItem__review">
          {`${reviewStarCount} відгуків`}
        </p>

        <p className="ProductItem__price-title">Ціна:</p>

        <div className="ProductItem__box-for-price">
          <p className="ProductItem__price">
            {`${this.toSeparatePrice(price)} грн`}
          </p>
          <p className="ProductItem__cashback">{`+ ${cashback} грн кешбек`}</p>
        </div>
        <p className="ProductItem__prevPrice">{`${this.toSeparatePrice(prevPrice)}грн`}</p>

        <p className="ProductItem__button-buy">Купити</p>
      </a>
    );
  }
}
