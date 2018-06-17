import React, { Component } from 'react';
import styled from 'styled-components';
import { Consumer } from '../Services/AppProvider';
import { Slat, ContentBlock, Column, Row } from '../Styles';

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
  padding: 0px 48px;
`;

class About extends Component {
  render() {
    console.log('this.props ~~>', this.props);
    const { loading, aboutPage, loadAboutPage } = this.props;
    if (loading) return <div>loading...</div>
    if (!aboutPage) {
      loadAboutPage();
      return <div>loading...</div>
    }
    return (
      <StyledSlat>
        {loading ? <div>loading...</div> : (
          <div>
            <ImageWrapper src={aboutPage.acf.hero_image.sizes.large} />
            <StyledRow>
              <Column span={2}>
                <StyledContentBlock dangerouslySetInnerHTML={{ __html: aboutPage.acf.description }} />
              </Column>
              <Column span={2}>
                <StyledContentBlock dangerouslySetInnerHTML={{ __html: aboutPage.acf.contact_info }} />
              </Column>
            </StyledRow>
          </div>
        )}
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