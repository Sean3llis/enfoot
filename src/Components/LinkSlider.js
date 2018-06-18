import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';
import { BREAK_POINTS, CTA } from '../Styles';

const StyledSlide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled(ButtonBack)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) translate(-20%);
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
  transform: translateY(-50%) translate(20%);
  height: 30px;
  width: 30px;
  background-color: white;
  border: none;
  color: ${props => props.theme.b300};
`;

const SlideTitle = styled.div`
  font-size: 28px;
  color: #fff;
  font-family: 'Lora', sans-serif;
  font-style: italic;
  font-weight: bold;
  @media ${BREAK_POINTS.tablet} {
    font-size: 22px;
  }
  @media ${BREAK_POINTS.mobile} {
    font-size: 16px;
  }
`;

const SlideCTA = styled(CTA)`

`;

const SliderWrapper = styled.div`
  margin: 0 auto;
  padding: 0px;
  .carousel {
    position: relative;
  }
  @media ${BREAK_POINTS.tablet} {
    padding: 0px;
    .carousel__back-button, .carousel__next-button {
      display: none;
    }
  }
`;

const StyledDot = styled(Dot)`
  background-color: ${props => props.theme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  color: ${props => props.theme.b300};
  border: none;
  height: 18px;
  width: 14px;
  margin-right: 4px;
  transition: transform 0.4s ease-in-out;
  transform: skewX(-15deg) translateY(-4px);
  &.carousel__dot--selected {
    background-color: transparent;
    border: 1px solid ${props => props.theme.white};
    color: ${props => props.theme.white};
    transform: skewX(-15deg) translateY(-6px);
  }
`;

const DotWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  margin: 0 auto;
  left: 0;
  right: 0;
`;

export default class LinkSlider extends Component {
  renderSlides = () => {
    return this.props.slides.map((slide, i) => {
      return (
        <Slide key={slide.slide_title + i}>
          <StyledSlide src={slide.slide_image.sizes.large}>
            <SlideTitle>{slide.slide_title}</SlideTitle>
            <SlideCTA href={this.buildLink(slide)}>{slide.slide_cta_text}</SlideCTA>
          </StyledSlide>
        </Slide>
      );
    })
  }

  renderDots = () => {
    return this.props.slides.map((slide, i) => {
      return (
        <StyledDot key={i} slide={i}>{i + 1}</StyledDot>
      );
    })
  }

  buildLink = (slide) => {
    console.log('build link', slide);
    var link = '/';
    if (slide && slide.slide_cta) {
      const post = (Array.isArray(slide.slide_cta)) ? slide.slide_cta[0] : slide.slide_cta;
      console.log('post.post_type ~~>', post.post_type);
      if (post.post_type === 'product') {
        link = `/discover/${post.post_name}`;
      } else if (post.post_type === 'post') {
        link = `/words/${post.post_name}`;
      } else if (post.post_type === 'page') {
        link = `/${post.post_name}`;
      }
      return link;
    } else {
      return '/';
    }
  }

  render() {
    return (
      <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={16}
          naturalSlideHeight={6}
          dragEnabled={false}
          totalSlides={this.props.slides.length}
        >
          <Slider>
            {this.renderSlides()}
          </Slider>
          <BackButton>{'<'}</BackButton>
          <NextButton>{'>'}</NextButton>
          <DotWrapper>
            {this.renderDots()}
          </DotWrapper>
        </CarouselProvider>
      </SliderWrapper>
    );
  }
}