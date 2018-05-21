import React, { Component } from 'react';
import styled from 'styled-components';
import { BREAK_POINTS, Slat, stepper, ContentBlock } from '../Styles';
import BreadCrumb from '../Components/BreadCrumb';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${BREAK_POINTS.mobile} {
    flex-direction: column;
  }
`;

const DescriptionWrapper = styled.div`
  flex: 1;
  padding: 16px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 22px;
`;

const Subtitle = styled.h3`
  border-bottom: 1px solid black;
  padding-bottom: 6px;
`;

const Description = styled.div`
  flex: 1;
  margin-top: 12px;
`;

const ImgWrapper = styled.div`
  flex: 1;
`;

const ImgTile = styled.img`
  transform-origin: center center;
  animation: ${stepper} 1s ease-out;
`;




class ProductDetail extends Component {
  state = {
    product: null
  }
  componentDidMount() {
    const { location: { state: { product }}} = this.props;
    this.setState({ product });
  }

  render() { 
    if (!this.state.product) return null;
    const {
      acf: { title, subtitle, image, description },
      slug,
      id,
      content
    } = this.state.product;
    return (
      <Slat>
        <BreadCrumb crumbs={[{label: 'Products', to: '/products'}, {label: title}]} />
        <InfoWrapper>
          <ImgWrapper>
            <ImgTile src={image.sizes.medium_large} alt={slug} />
          </ImgWrapper>
          <DescriptionWrapper>
            <Title>
              {title}
            </Title>
            <Subtitle>
              {subtitle}
            </Subtitle>
            <Description dangerouslySetInnerHTML={{__html: description}} />
          </DescriptionWrapper>
        </InfoWrapper>
        <ContentBlock dangerouslySetInnerHTML={{__html: content.rendered}} />
        <BreadCrumb crumbs={[{ label: 'Products', to: '/products' }, { label: title }]} />
      </Slat>
    );
  }
}
 
export default ProductDetail;