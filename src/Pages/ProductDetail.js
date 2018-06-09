import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BREAK_POINTS, Slat, ContentBlock, BackgroundImage } from '../Styles';
import BreadCrumb from '../Components/BreadCrumb';
import { Consumer } from '../Services/AppProvider';

const InfoWrapper = styled.div`
  @media ${BREAK_POINTS.mobile} {
    flex-direction: column;
  }
`;

const DescriptionWrapper = styled.div`
  flex: 1;
  padding: 16px;
  max-width: 400px;
  margin: 0 auto;
  padding-top: 100px;
`;

const BackLink = styled(Link)`
  display: block;
  margin: 8px 0px;
  @media ${BREAK_POINTS.tablet} {
    display: none;
  }
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  color: #fff;
  @media ${BREAK_POINTS.tablet} {
    font-size: 22px;
  }
`;

const Subtitle = styled.div`
  font-size: 12px;
  padding-bottom: 6px;
`;

const Description = styled.div`
  flex: 1;
  margin-top: 12px;
  margin-bottom: 48px;
`;

const ImgWrapper = styled.div`
  flex: 1;
  max-width: 400px;
  position: absolute;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  margin: auto;
`;

const ImgTile = styled.img`
  width: 100%;
  @media ${BREAK_POINTS.mobile} {
    max-width: 500px;
  }
`;

const HeroWrapper = BackgroundImage.extend`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
`;

const HeroMock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 100%;
  background-color: ${props => props.theme.primary};
`;

class ProductDetail extends Component {
  state = {
    product: null
  }

  renderBackground = (background_image, title) => {
    if (!background_image) {
      return <HeroMock></HeroMock>
    }
    return (
      <HeroWrapper src={background_image.sizes.large}>
        <Title>{title}</Title>
      </HeroWrapper>
    );
  }

  renderProductDetail = (state) => {
    const slug = this.props.match.params.slug;
    const product = state.getProduct(slug);
    if (!product) return;
    const {
      acf: { title, subtitle, image, description, background_image},
      content
    } = product;
    return (
      <Slat>
        {this.renderBackground(background_image, title)}
        <ImgWrapper>
          <ImgTile src={image.sizes.medium_large} alt={slug} />
        </ImgWrapper>
        <InfoWrapper>
          <BackLink to="/discover">Back to Products</BackLink>
          <DescriptionWrapper>
            <Subtitle>
              {subtitle}
            </Subtitle>
            <Description dangerouslySetInnerHTML={{ __html: description }} />
          </DescriptionWrapper>
        </InfoWrapper>
        <ContentBlock dangerouslySetInnerHTML={{ __html: content.rendered }} />
        <BreadCrumb crumbs={[{ label: 'Products', to: '/products' }, { label: title }]} />
      </Slat>
    )
  }

  render() { 
    return (
      <Consumer>
        {this.renderProductDetail}
      </Consumer>
    );
  }
}
 
export default ProductDetail;