import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { Link } from 'react-router-dom';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';
import { BREAK_POINTS, BackgroundImage } from '../Styles';

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 48px auto;
  max-width: 1200px;
`;

const TrackWrapper = styled.div`
  position: relative;
  width: 75%;
  order: ${props => props.titlePlacement === 'left' ? 2 : 0};
  background-color: ${props => props.trackColor};
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
  background-color: ${props => props.titleColor};
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
`;

const ProductSlide = styled(BackgroundImage)`
  height: 100%;
  width: 100%;
  transition: transform 0.4s ease-out;
`;

const StyledSlide = styled(Slide)`
  a div:first-child {
    transform: rotateZ(45deg) translateX(5px) translateY(5px);
  }
  a div:last-child {
    opacity: 0;
    transform: translateY(-6px);
  }
  &:hover {
    a div:first-child {
      transform: rotateZ(45deg) translateX(0px) translateY(0px);
    }
    a div:last-child {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @media ${BREAK_POINTS.tablet} {
    a div:first-child {
      transform: rotateZ(45deg) translateX(0px) translateY(-20px);
    }
    a div:last-child {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

const SlideTitle = styled.div`
  position: absolute;
  margin: 0 auto;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 16px;
  transition: transform 0.4s ease-out, opacity 0.5s linear;
  color: ${props => props.theme.b300};
`;

const ViewAllLink = styled(Link)`
  font-size: 10px;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 2px;
  margin-top: 18px;
  position: relative;
  padding: 6px 18px;
  &:after {
    content: '';
    position: absolute;
    top: -8px;
    left: 0px;
    right: 0px;
    margin: 0 auto;
    width: 16px;
    height: 1px;
    background-color: ${props => props.theme.white};
  }
`;

export default class ProductSlider extends Component {
  static defaultProps = {
    titlePlacement: 'right',
    trackColor: '#e9e4df',
    titleColor: '#ea7e3f'
  }

  renderSlides = () => {
    return this.props.products.map((product, i) => {
      return (
        <StyledSlide key={product.slug + i}>
          <Link to={`/discover/${product.slug}`}>
            <ProductSlide onClick={this.handleSlideClick} src={product.acf.image.sizes.medium} />
            <SlideTitle>{product.title.rendered}</SlideTitle>
          </Link>
        </StyledSlide>
      );
    })
  }

  componentDidMount() {
    
  }

  calcSlides = () => {
    const width = window.innerWidth;
    if (width > 1200) {
      return 3;
    } else if (width > 767) {
      return 2;
    } else {
      return 1;
    }
  }

  render() {
    return (
      <SliderWrapper>
        <TrackWrapper titlePlacement={this.props.titlePlacement} trackColor={this.props.trackColor}>
        <CarouselProvider
          naturalSlideWidth={1}
          naturalSlideHeight={1}
          dragEnabled={false}
          visibleSlides={this.calcSlides()}
          totalSlides={this.props.products.length}
        >
          <Slider>
            {this.renderSlides()}
          </Slider>
          <BackButton>{'<'}</BackButton>
          <NextButton>{'>'}</NextButton>
        </CarouselProvider>
        </TrackWrapper>
        <TitleWrapper titleColor={this.props.titleColor}>
          {this.props.title}
          <ViewAllLink to={`/discover/category/${this.props.categorySlug}`}>VIEW ALL</ViewAllLink>
        </TitleWrapper>
      </SliderWrapper>
    );
  }
}