import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';
import { BREAK_POINTS } from '../Styles';

const StyledShoeTile = styled.div`
  position: relative;
  padding: 16px;
  transition: all 1.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'translateY(0px)' : 'translateY(-14px)'};
  transition-delay: ${props => props.offset}ms;
  @media ${BREAK_POINTS.mobile} {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`

`;

const Title = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Subtitle = styled.div`
  font-size: 12px;
  font-weight: normal;
`;

const ImgWrapper = styled.div`
  position: relative;

  &:hover {
    cursor: pointer;
    img {
      transform: translateY(-6px) rotateZ(-4deg);
      &:last-child {
        transform: translateY(10px) translateX(-20px) rotateZ(8deg);
      }
    }
  }
`;

const ImgTile = styled.img`
  transition: all 0.2s ease-out;
  &:last-child {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
`;

export default class ProductTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: null,
      loaded: false,
      visible: false,
      offset: 0,
    }
  }

  componentDidMount() {
    this.setState({ offset: (this.props.i % 3 + 1) * 200  });
  }

  requestImage = () => {
    if (this.state.loaded) return;
    const img = new Image(1, 1);
    const src = this.props.acf.image.sizes.medium_large;
    img.src = src
    img.onload = () => {
        this.setState({ loaded: true, src: src });
      }
    }

  renderImages = () => {
    const { slug } = this.props;
    if (this.state.loaded) {
      return (
        <ImgWrapper offset={this.state.offset} visible={this.state.isVisible}>
          <ImgTile src={this.state.src} alt={slug} />
          <ImgTile src={this.state.src} alt={slug} />
        </ImgWrapper>
      );
    }
  }

  handleVisibilityChange = (isVisible) => {
    this.setState({ isVisible });
  }

  render = () => {
    const {
      acf: { title, subtitle },
      slug
    } = this.props;
    if (!this.state.loaded && this.state.isVisible) this.requestImage();
    return (
      <StyledShoeTile offset={this.state.offset} visible={this.state.isVisible}>
        <Link to={{ pathname: `/discover/${slug}`, state: { product: this.props } }}>
          {this.renderImages()}
          <TitleWrapper offset={this.state.offset} visible={this.state.isVisible}>
          <Title>
            {title}
          </Title>
          <Subtitle>
            {subtitle}
          </Subtitle>
        </TitleWrapper>
        </Link>
        <VisibilitySensor offset={{ bottom: -100 }} onChange={this.handleVisibilityChange} partialVisibility={true} scrollCheck={true} />
      </StyledShoeTile>
    );
  }

  // render() {
  //   return (
  //     <div>

  //     </div>
  //     <VisibilitySensor offset={{ bottom: 200 }} partialVisibility={true} scrollCheck={true}>
  //       {this.newRender}
  //     </VisibilitySensor>
  //   );
  // }
}