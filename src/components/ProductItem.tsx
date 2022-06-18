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
  isHoverProductItem: boolean;
  isSelectProductItem: boolean;
  isCompareProductItem: boolean;
  arrayOfReview: number[];
  countReviewStar: number;
};

export class ProductItem extends React.Component<Props, State> {
  state = {
    isHoverProductItem: false,
    isSelectProductItem: false,
    isCompareProductItem: false,
    arrayOfReview: this.props.review,
    countReviewStar: Math.floor(this.props.review.reduce((a, b) => (a + b), 0)
      / this.props.review.length),
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
    // eslint-disable-next-line no-console
    console.log('review = ', review);

    if (review === 0) {
      return 'немає відгуків';
    }

    const N = review % 100;

    if (N % 10 === 1 && N !== 11) {
      return `${review} відгук`;
    }

    if (N % 10 === 2 || N % 10 === 3 || N % 10 === 4) {
      return `${review} відгука`;
    }

    return `${review} відгуків`;
  };

  // changeStatusHandler1 = () => {
  //   this.setState(prevState => (
  //     { isSelectProductItem: !prevState.isSelectProductItem }
  //   ));
  // };

  // changeStatusHandler2 = () => {
  //   this.setState(prevState => (
  //     { isCompareProductItem: !prevState.isCompareProductItem }
  //   ));
  // };

  // changeStatusHandler3 = (event: React.MouseEvent, id: string) => {
  //   // eslint-disable-next-line no-console
  //   console.log(event.target);

  //   this.setState(prevState => ({
  //     ...prevState,
  //     [id]: !prevState[id],
  //   }));
  // };

  handlerReviewStar = (n: number) => {
    this.setState((prevState) => ({
      arrayOfReview: [...prevState.arrayOfReview, n],
      countReviewStar: Math.floor([...prevState.arrayOfReview, n]
        .reduce((a, b) => (a + b), 0) / [...prevState.arrayOfReview, n].length),
    }));
  };

  render() {
    const {
      id,
      picture,
      discount,
      description,
      action,
      title,
      price,
      cashback,
      prevPrice,
    } = this.props;

    const {
      isCompareProductItem,
      isHoverProductItem,
      isSelectProductItem,
      countReviewStar,
      arrayOfReview,
    } = this.state;

    const picturePath = `${picture}`;

    // eslint-disable-next-line no-console
    console.log(this.state.arrayOfReview.length);

    return (
      <div
        className="ProductItem"
        onMouseEnter={() => this.setState({ isHoverProductItem: true })}
        onMouseLeave={() => this.setState({ isHoverProductItem: false })}
      >
        <p
          className={classNames(
            'ProductItem__id',
            { 'ProductItem__id--hover': isHoverProductItem },
          )}
        >
          Код товару:
          &nbsp;
          {id}
        </p>

        <img
          className={classNames(
            'ProductItem__picture',
            { 'ProductItem__picture--hover': isHoverProductItem },
          )}
          // eslint-disable-next-line global-require
          src={picture}
          alt={picturePath}
        />

        <div
          className={classNames(
            'ProductItem__box-for-discount',
            { 'ProductItem__box-for-discount--hover': isHoverProductItem },
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
            { 'ProductItem__description--hover': isHoverProductItem },
          )}
        >
          {description}
        </p>

        <p className="ProductItem__title">
          {title}
        </p>

        {/* ----------------------------------------------------*/}
        <div className="ProductItem__review-box">
          <div
            role="presentation"
            className={classNames(
              'ProductItem__review-star',
              { 'ProductItem__review-star--approve': countReviewStar >= 1 },
            )}
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log('some1');

              this.handlerReviewStar(1);
            }}
          />
          <div
            role="presentation"
            className={classNames(
              'ProductItem__review-star',
              { 'ProductItem__review-star--approve': countReviewStar >= 2 },
            )}
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log('some2');

              this.handlerReviewStar(2);
            }}
          />
          <div
            role="presentation"
            className={classNames(
              'ProductItem__review-star',
              { 'ProductItem__review-star--approve': countReviewStar >= 3 },
            )}
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log('some3');

              this.handlerReviewStar(3);
            }}
          />
          <div
            role="presentation"
            className={classNames(
              'ProductItem__review-star',
              { 'ProductItem__review-star--approve': countReviewStar >= 4 },
            )}
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log('some4');

              this.handlerReviewStar(4);
            }}
          />
          <div
            role="presentation"
            className={classNames(
              'ProductItem__review-star',
              { 'ProductItem__review-star--approve': countReviewStar >= 5 },
            )}
            onClick={() => {
              // eslint-disable-next-line no-console
              console.log('some5');

              this.handlerReviewStar(5);
            }}
          />

          <p className="ProductItem__review">
            {this.reviewText(arrayOfReview.length)}
          </p>
          {/* --------------------------------------------------- */}
        </div>

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

        <div className="ProductItem__button-box">
          <p
            className={classNames(
              'ProductItem__button-buy',
              { 'ProductItem__button-buy--hover': isHoverProductItem },
            )}
          >
            Купити
          </p>

          <img
            role="presentation"
            onClick={() => {
              this.setState(prevState => ({
                isSelectProductItem: !prevState.isSelectProductItem,
              }));
            }}
            src="https://i.imgur.com/AYaeC3a.png"
            alt="heart"
            className={classNames(
              'ProductItem__select',
              { 'ProductItem__select--active': isSelectProductItem },
            )}
          />

          <img
            id="isCompareProductItem"
            role="presentation"
            // onClick={(event) => {
            //   this.changeStatusHandler3(event, Object.keys(this.state)[1]);
            // }}
            onClick={() => {
              this.setState(prevState => ({
                isCompareProductItem: !prevState.isCompareProductItem,
              }));
            }}
            src="https://i.imgur.com/UT6R7lx.png"
            alt="scales"
            className={classNames(
              'Scales',
              'ProductItem__select',
              { 'ProductItem__select--active': isCompareProductItem },
            )}
          />

        </div>
      </div>
    );
  }
}

// https://docs.google.com/forms/d/e/1FAIpQLScVVn99RHLPPXADeEH3U6zh0Ut-jmyo7DTe8QteTptb06VbxA/viewform

// https://lh3.googleusercontent.com/IjpPKSJlHwjtevN0R3E_IGI5G46D2eU12QaLYv_J9MIgduMmfRdSC1zom_Fuqwz8FB0ETXHYoIHBf8hTh3oyJZS82Qis5C0iSMp7sc36FMs94gl_fxbnB_52lDv2OaLt3Q=w1712

// https://www.work.ua/jobs/4620715/

// https://jobs.dou.ua/companies/biscience/vacancies/208185/
