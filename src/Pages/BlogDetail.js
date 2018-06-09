import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PostService } from '../Services/Posts';
import { Slat, ContentBlock, BackgroundImage, Title } from '../Styles';


const StyledSlat = styled(Slat)`
  position: relative;
`;

const StyledTitle = styled(Title)`
  margin: 20px 0px;
`;

const StyledContentBlock = styled(ContentBlock)`
  padding: 60px 20px;
`;

const BackLink = styled(Link)`
  position: absolute;
  left: 0px;
`;


const Hero = styled(BackgroundImage)`
  background-attachment: fixed;
  height: 300px;
`;

class BlogDetail extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    const {
      location,
      match: { params: { slug }}
    } = this.props;

    if (location.state && location.state.post) {
      this.setState({ post: location.state.post });
    } else {
      PostService.getPost(slug).then(post => this.setState({ post }));
    }
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



  render() {
    const { post } = this.state;
    if (!post) return <div>loading...</div>
    return (
      <StyledSlat>
        <Hero src={post.acf.image.sizes.large} />
        <BackLink to={{ pathname: '/words' }}>Back</BackLink>
        <StyledTitle>{post.title.rendered}</StyledTitle>
        <StyledContentBlock dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </StyledSlat>
    );
  }
}
 
export default BlogDetail;