import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';
import { BREAK_POINTS, BackgroundImage } from '../Styles';

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 75%;
  order: ${props => props.titlePlacement === 'left' ? 2 : 0};
  background-color: #e9f4ff;
  @media ${BREAK_POINTS.tablet} {
    width: 100%;
  }
`;
const TitleWrapper = styled.div`
  width: 25%;
  display: flex;
  color: ${props => props.theme.white};
  font-weight: bold;
  font-family: 'Lora', sans-serif;
  font-size: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #607FA0;
  @media ${BREAK_POINTS.tablet} {
    display: none;
  }
`;

const BackButton = styled(ButtonBack)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 30px;
  width: 30px;
  background-color: white;
  border: none;
  color: ${props => props.theme.b300};
  @media ${BREAK_POINTS.tablet} {
    display: none;
  }
`;

const NextButton = styled(ButtonNext)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 30px;
  width: 30px;
  background-color: white;
  border: none;
  color: ${props => props.theme.b300};
  @media ${BREAK_POINTS.tablet} {
    display: none;
  }
`;

const ProductSlide = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  transform: rotateZ(45deg);
`

export default class ProductSlider extends Component {
  static defaultProps = {
    titlePlacement: 'right'
  }
  renderSlides = () => {
    return this.props.products.map((product, i) => {
      return (
        <Slide key={product.slug + i}>
          <ProductSlide src={product.acf.image.sizes.medium} {...product} />
        </Slide>
      );
    })
  }

  render() {
    return (
      <SliderWrapper>
        <CarouselWrapper titlePlacement={this.props.titlePlacement}>
        <CarouselProvider
          naturalSlideWidth={1}
          naturalSlideHeight={1}
          dragEnabled={false}
          visibleSlides={3}
          totalSlides={this.props.products.length}
        >
          <Slider>
            {this.renderSlides()}
          </Slider>
          <BackButton>{'<'}</BackButton>
          <NextButton>{'>'}</NextButton>
        </CarouselProvider>
        </CarouselWrapper>
        <TitleWrapper>
          {this.props.title}
        </TitleWrapper>
      </SliderWrapper>
    );
  }
}