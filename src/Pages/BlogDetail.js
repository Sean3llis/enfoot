import React, { Component } from 'react';
import styled from 'styled-components';
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router-dom';
import { PostService } from '../Services/Posts';
import { Slat, ContentBlock } from '../Styles';


const StyledSlat = styled(Slat)`
  padding: 48px 0px;
`;

const PostTile = styled.article`
  padding: 16px;
  background-color: #fff;
  position: relative;
  margin: 24px auto 148px;
  max-width: 800px;
  img {
    max-width: none;
  }
  .link-more {
    display: none !important;
    visibility: hidden;
    opacity: 0;
  }
`;

const Image = styled.img`
  position: absolute;
`;

const StyledContentBlock = styled(ContentBlock)`
  position: relative;
  padding: 16px;
  font-size: 10px;
  z-index: 10;
  transform: translateY(25%);
  background-color: #fff;
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

  // renderPosts = () => {
  //   return this.state.posts.map((post, i) => {
  //     const imageSrc = (post.acf && post.acf.image) ? post.acf.image.sizes.medium_large : false; 
  //     return (
  //       <PostTile key={i}>
  //         {imageSrc && <Image src={imageSrc} />}
  //         <StyledContentBlock dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
  //         <Outline />
  //       </PostTile>
  //     );
  //   })
  // }

  renderPosts = () => {
    return this.state.posts.map((post, i) => {
      console.log('post ~~>', post);
      const imageSrc = (post.acf && post.acf.image) ? post.acf.image.sizes.medium_large : false;
      const imageAlt = post.acf.image.alt;
      return (
        <PostTile key={`${post.slug}-${i}`}>
          <Link to={{ pathname: `/words/${'lol'}`}}>
          <Parallax bgStyle={{'background-size': 'contain'}} strength={100} bgImage={imageSrc} bgImageAlt={imageAlt}>
            <StyledContentBlock dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </Parallax>
          </Link>
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