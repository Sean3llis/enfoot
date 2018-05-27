import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BREAK_POINTS } from '../Styles';

const StyledShoeTile = styled.div`
  position: relative;
  padding: 16px;
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
  margin-bottom: 12px;
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

const StyledLink = styled(Link)`

`;

export default class ProductTile extends Component {
  state = {
    src: null
  }
  componentDidMount() {
    this.setState({ src: this.props.acf.image.sizes.medium_large })
  }
  render() {
    const {
      acf: { title, subtitle, image },
      slug,
      id
    } = this.props;

    return (
      <StyledShoeTile>
        <Link to={{ pathname: `/products/${slug}`, state: { product: this.props } }}>
          <ImgWrapper>
            <ImgTile src={this.state.src} alt={slug} />
            <ImgTile src={this.state.src} alt={slug} />
          </ImgWrapper>
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
}