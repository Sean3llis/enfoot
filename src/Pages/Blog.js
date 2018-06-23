import React, { Component } from 'react';
import styled from 'styled-components';
import { find } from 'lodash';
import { Link } from 'react-router-dom';
import { Consumer } from '../Services/AppProvider';
import { PostService } from '../Services/Posts';
import { Slat, BackgroundImage, BREAK_POINTS } from '../Styles';
import Loader from '../Components/Loader';


const StyledSlat = styled(Slat)`
  padding: 48px 0px;
`;


const StyledPostTile = styled.article`
  max-width: 1000px;
  height: 400px;
  margin: 48px auto;
  @media ${BREAK_POINTS.tablet} {
    padding: 0px 20px;
  }
  &:nth-child(even) {
    .tile-inner {
      flex-direction: row-reverse;
      @media ${BREAK_POINTS.mobile} {
        flex-direction: column;
      }
    }
  }
`;

const TileInner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 100%;
  @media ${BREAK_POINTS.mobile} {
    width: 100%;
    height: 400px;
    flex-direction: column;
  }
`;

const PostImg = styled(BackgroundImage)`
  flex: 1;
  width: 75%;
  background-attachment: fixed;
  height: 100%;
  @media ${BREAK_POINTS.mobile} {
    width: 100%;
  }
`;

const PostDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media ${BREAK_POINTS.mobile} {
    flex-direction: row;
    height: 140px;
    width: 100%;
  }
`;

const DetailTile = styled.div`
  background-color: #ECE8DF;
  color: ${props => props.theme.b300};
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 200px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  &:last-child {
    background-color: #607FA0;
    color: #ECE8DF;
  }
  @media ${BREAK_POINTS.mobile} {
    width: 50%;
  }
`;


class PostTile extends Component {

  render() {
    const { slug, title, acf: { image } }= this.props;
    return (
        <StyledPostTile>
          <Link to={{ pathname: `/words/${slug}`, state: { post: find(this.props.posts, { slug }) } }}>
            <TileInner className="tile-inner">
            <PostImg src={image.sizes.large} />
            <PostDetailWrapper>
              <DetailTile>{title.rendered}</DetailTile>
              <DetailTile>alfjldaksfa</DetailTile>
            </PostDetailWrapper>
            </TileInner>
          </Link>
        </StyledPostTile>
    );
  }
}

class Blog extends Component {
  state = {
    posts: [],
    loading: true
  }

  componentDidMount() {
    PostService.getPosts().then(posts => this.setState({ posts, loading: false }));
  }

  renderPosts = () => {
    return this.state.posts.map((post, i) => <PostTile key={post.id} {...post} posts={this.state.posts} />);
  }

  renderBlog = (state) => {
    if (state.loading) return <Loader />
    return (
      <StyledSlat>
        {this.renderPosts()}
      </StyledSlat>
    );
  }

  render() {
    return (
      <Consumer>
        {this.renderBlog}
      </Consumer>
    )
  }
}
 
export default Blog;