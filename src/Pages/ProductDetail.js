import React, { Component } from 'react';
import styled from 'styled-components';
import { BREAK_POINTS, Slat, ContentBlock } from '../Styles';
import BreadCrumb from '../Components/BreadCrumb';
import { Consumer } from '../Services/AppProvider';


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
  @media ${BREAK_POINTS.mobile} {
    margin-top: -100px;
  }
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
  margin-bottom: 48px;
`;

const ImgWrapper = styled.div`
  flex: 1;
`;

const ImgTile = styled.img`
  width: 100%;
  @media ${BREAK_POINTS.mobile} {
    max-width: 500px;
  }
`;




class ProductDetail extends Component {
  state = {
    product: null
  }

  renderProductDetail = (state) => {
    const slug = this.props.match.params.slug;
    const product = state.getProduct(slug);
    if (!product) return null;
    const {
      acf: { title, subtitle, image, description },
      content
    } = product;
    return (
      <Slat>
        <BreadCrumb crumbs={[{ label: 'Products', to: '/products' }, { label: title }]} />
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