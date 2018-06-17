import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';

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
`;

const SlideTitle = styled.div`
  font-size: 28px;
  color: #fff;
  font-family: 'Lora', sans-serif;
  font-style: italic;
  font-weight: bold;
`;

const SliderWrapper = styled.div`
  margin: 0 auto;
`;

export default class LinkSlider extends Component {
  renderSlides = () => {
    return this.props.slides.map((slide, i) => {
      return (
        <Slide key={slide.slide_title + i}>
          <StyledSlide src={slide.slide_image.sizes.large}>
            <SlideTitle>{slide.slide_title}</SlideTitle>
          </StyledSlide>
        </Slide>
      );
    })
  }
  render() {
    return (
      <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={16}
          naturalSlideHeight={6}
          totalSlides={this.props.slides.length}
        >
          <Slider>
            {this.renderSlides()}
          </Slider>
          <ButtonBack>akldjf</ButtonBack>
        </CarouselProvider>
      </SliderWrapper>
    );
  }
}