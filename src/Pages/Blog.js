import React, { Component } from 'react';
import styled from 'styled-components';
import { PostService } from '../Services/Posts';
import { Slat, ContentBlock } from '../Styles';

const StyledSlat = styled(Slat)`
  padding: 48px 0px;
`;

const PostTile = styled.article`
  padding: 16px;
  background-color: #fff;
  position: relative;
  margin: 48px auto 148px;
  max-width: 600px;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  &:nth-child(even) {
    left: -80px;
  }
  &:nth-child(odd) {
    right: 80px;
  }
`;

const StyledContentBlock = styled(ContentBlock)`
  position: relative;
  background-color: #fff;
  padding: 48px;
  z-index: 10;
`;

const Outline = styled.div`
  position: absolute;
  z-index: 15;
  border: 1px solid ${props => props.theme.b300};
  left: 30px;
  right: 30px;
  top: 30px;
  bottom: 30px;
`;

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    PostService.getPosts().then(posts => this.setState({ posts }));
  }

  renderPosts = () => {
    return this.state.posts.map((post, i) => {
      const imageSrc = (post.acf && post.acf.image) ? post.acf.image.sizes.medium_large : false; 
      return (
        <PostTile key={i}>
          {imageSrc && <Image src={imageSrc} />}
          <StyledContentBlock dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <Outline />
        </PostTile>
      );
    })
  }

  render() { 
    return (
      <StyledSlat>
        {this.renderPosts()}
      </StyledSlat>
    );
  }
}
 
export default Blog;