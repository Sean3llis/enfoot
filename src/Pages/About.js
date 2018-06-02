import React, { Component } from 'react';
import styled from 'styled-components';
import { PageService } from '../Services/Pages';
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

// const Contact = styled.div`

// `;

// const Description = styled.div`

// `;

class About extends Component {
  state = {
    loading: true,
    page: null
  };

  componentDidMount() {
    PageService.getAbout().then(page => {
      this.setState({
        loading: false,
        page: page.acf
      });
    })
  }
  render() {
    console.log('this.state ~~>', this.state);
    return (
      <StyledSlat>
        {this.state.loading ? <div>loading...</div> : (
          <div>
          <ImageWrapper src={this.state.page.hero_image.sizes.large} />
          <StyledRow>
            <Column span={2}>
              <StyledContentBlock dangerouslySetInnerHTML={{ __html: this.state.page.description }} />
            </Column>
            <Column span={2}>
              <StyledContentBlock dangerouslySetInnerHTML={{ __html: this.state.page.contact_info }} />
            </Column>
          </StyledRow>
          </div>
        )}
      </StyledSlat>
    );
  }
}

export default About;