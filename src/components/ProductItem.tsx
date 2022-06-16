import classNames from 'classnames';
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
    // const reversed = price.toString().split('').reverse();
    const reversed = price.toString();
    const lengthOfReversed = reversed.length;
    let result = '';

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i <= lengthOfReversed - 1; i++) {
      // eslint-disable-next-line no-mixed-operators
      if (i % 3 === 0 && i <= lengthOfReversed - 1 && i > 0) {
        result += ' ';
      }

      result += reversed[lengthOfReversed - 1 - i];
    }

    return result.split('').reverse().join('');
  };

  reviewText = (review: number) => {
    if (review === 0) {
      return 'немає відгуків';
    }

    const N = review % 100;

    if (N % 10 === 1 && N !== 11) {
      return `${review} відгук`;
    }

    if (N % 10 === 2 || N % 10 === 3 || N % 10 === 4) {
      return `${review} немає відгука`;
    }

    return `${review} відгуків`;
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

    // eslint-disable-next-line no-console
    console.log(picturePath);

    // const reviewStarCount
    //   = Math.floor(review.reduce((a, b) => a + b, 0) / review.length);

    return (
      <div
        className="ProductItem"
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <p
          className={classNames(
            'ProductItem__id',
            { 'ProductItem__id--hover': this.state.hover },
          )}
        >
          Код товару:
          &nbsp;
          {id}
        </p>

        <img
          className={classNames(
            'ProductItem__picture',
            { 'ProductItem__picture--hover': this.state.hover },
          )}
          // eslint-disable-next-line global-require
          src={picture}
          alt={picturePath}
        />

        <div
          className={classNames(
            'ProductItem__box-for-discount',
            { 'ProductItem__box-for-discount--hover': this.state.hover },
          )}
        >
          <p className="ProductItem__discount">
            {`-${discount}%`}
          </p>

          <p className={classNames(
            'ProductItem__action',
            { 'ProductItem__action--best-price': action === 'найкраща ціна' },
            { 'ProductItem__action--hit': action === 'хіт' },
          )}
          >
            {action}
          </p>

        </div>

        <p
          className={classNames(
            'ProductItem__description',
            { 'ProductItem__description--hover': this.state.hover },
          )}
        >
          {description}
        </p>

        <p className="ProductItem__title">
          {title}
        </p>

        <p className="ProductItem__review">
          {this.reviewText(review.length)}
        </p>

        <p className="ProductItem__price-title">Ціна:</p>

        <div className="ProductItem__box-for-price">
          <p className="ProductItem__price">
            {`${this.toSeparatePrice(price)} грн`}
            {price}
          </p>
          <p className="ProductItem__cashback">{`+ ${cashback} грн кешбек`}</p>
        </div>

        <p className="ProductItem__prevPrice">
          {`${this.toSeparatePrice(prevPrice)}грн`}
        </p>

        <p
          className={classNames(
            'ProductItem__button-buy',
            { 'ProductItem__button-buy--hover': this.state.hover },
          )}
        >
          Купити
        </p>

        <img
          src="https://imgur.com/H4mv702"
          alt="heart"
          className={classNames(
            'ProductItem__select',
            { 'ProductItem__select--hover': this.state.hover },
          )}
        />
      </div>
    );
  }
}
