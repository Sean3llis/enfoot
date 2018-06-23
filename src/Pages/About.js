import React, { Component } from 'react';
import styled from 'styled-components';
import { Consumer } from '../Services/AppProvider';
import { Slat, ContentBlock, Row, Title } from '../Styles';
import Loader from '../Components/Loader';

const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
  padding: 48px;
  background-color: ${props => props.theme.offwhite};
  div {
    padding: 0;
  }
`;

const StyledSlat = styled(Slat) `

`;

const ImageWrapper = styled.div`
  background-image: url(${props => props.src});
  height: 600px;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;

const StyledRow = styled(Row)`
  padding: 48px 0px;
`;

const StyledContentBlock = styled(ContentBlock)`
  max-width: none;
`;

class About extends Component {
  render() {
    const { loading, aboutPage, loadAboutPage } = this.props;
    if (loading) return <Loader />
    if (!aboutPage) {
      loadAboutPage();
      return <Loader />
    }
    return (
      <StyledSlat>
        <ImageWrapper src={aboutPage.acf.hero_image.sizes.large} />
        <StyledRow>
          <Left>
            <Title>About Us.</Title>
            <StyledContentBlock dangerouslySetInnerHTML={{ __html: aboutPage.acf.description }} />
          </Left>
          <Right>
            <StyledContentBlock dangerouslySetInnerHTML={{ __html: aboutPage.acf.contact_info }} />
          </Right>
        </StyledRow>
      </StyledSlat>  
    )
  }
}
 
class AboutProvider extends Component {
  render() {
    return (
      <Consumer>
        {state => (<About {...state} />)}
      </Consumer>
    )
  }
}

export default AboutProvider;