import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';
import { BREAK_POINTS } from '../Styles';

const StyledShoeTile = styled.div`
  position: relative;
  padding: 16px;
  height: ${props => props.height || 0}px;
  opacity: ${props => props.visible ? 1 : 0};
  transform: ${props => props.visible ? 'translateY(0px)' : 'translateY(-20px)'};
  transition: all 0.6s ease-in-out;
  transition-delay: 0.2s;
  @media ${BREAK_POINTS.mobile} {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  margin-top: -80px;
  text-align: center;
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

const Subtitle = styled.div`
  font-size: 12px;
  font-weight: normal;
  padding: 0px 48px;
`;

const ImgWrapper = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
    img {
      transform: translateY(-6px) rotateZ(-4deg);
      &:last-child {
        transform: translateY(40px) translateX(-20px) rotateZ(16deg);
      }
    }
  }
`;

const ImgTile = styled.img`
  transition: all 0.4s ease-in-out;
  transform: none;
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
      width: 0,
      loaded: false
    }
    this.tile = React.createRef();
  }

  componentDidMount() {
    this.setState({ width: this.tile.current.offsetWidth })
  }

  requestImage = () => {
    const img = new Image(1, 1);
    const src = this.props.acf.image.sizes.medium_large;
    img.src = src
    img.onload = () => {
      if (this.tile.current) {
        this.setState({ loaded: true, src: src });
      } else {
        this.setState({ loaded: true, width: this.tile.current.offsetWidth, src: src });
      }
    }
  }

  renderImages = () => {
    const {
      acf: { title, subtitle },
      slug
    } = this.props;
    if (this.state.loaded) {
      return (
        <ImgWrapper height={this.state.width}>
          <ImgTile src={this.state.src} alt={slug} />
          <ImgTile src={this.state.src} alt={slug} />
        </ImgWrapper>
      );
    } else {
      return <div>loading...</div>
    }
  }

  renderTile = (sensor) => {
    const {
      acf: { title, subtitle },
      slug
    } = this.props;
    if (sensor.isVisible && !this.state.loaded) {
      this.requestImage();
    }
    return (
      <StyledShoeTile visible={sensor.isVisible && this.state.loaded} height={this.state.width} innerRef={this.tile}>
        <Link to={{ pathname: `/products/${slug}`, state: { product: this.props } }}>
          {this.renderImages()}
        </Link>
        <TitleWrapper>
          <Title>
            {title}
          </Title>
          <Subtitle>
            {subtitle}
          </Subtitle>
        </TitleWrapper>
      </StyledShoeTile>
    );
  }

  render() {


    return (
      <VisibilitySensor partialVisibility={true} scrollCheck={true}>
        {this.renderTile}
      </VisibilitySensor>
    );
  }
}