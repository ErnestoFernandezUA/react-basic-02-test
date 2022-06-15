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

  reviewText = (review: number[]) => {
    // eslint-disable-next-line no-console
    console.log('review = ', review.length);

    if (review.length === 0) {
      return 'немає відгуків';
    }

    const lastNumber: string = review.length.toString().slice(-1);

    // eslint-disable-next-line no-console
    console.log('lastNumber = ', lastNumber, typeof (lastNumber));

    switch (lastNumber) {
      case '1':
        return `${review.length} відгук`;
        break;

      case '2':
      case '3':
      case '4':
        return `${review.length} відгука`;
        break;

      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        return `${review.length} відгуків`;
        break;

      default:
        return 'немає 123 відгуків';
    }
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
          src="../data/img/pic1.jpg"
          alt={picture}
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
          {this.reviewText(review)}
        </p>

        <p className="ProductItem__price-title">Ціна:</p>

        <div className="ProductItem__box-for-price">
          <p className="ProductItem__price">
            {`${this.toSeparatePrice(price)} грн`}
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

        <div
          className={classNames(
            'ProductItem__select',
            { 'ProductItem__select--hover': this.state.hover },
          )}
          style={{
            backgroundImage: '../data/img/scales.png',
          }}
        />
      </div>
    );
  }
}
