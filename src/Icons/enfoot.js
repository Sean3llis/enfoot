import React, { Component } from 'react'
import styled from 'styled-components';

const LogoWrapper = styled.div`
  padding: 0px 28px;
`;

export default class EnfootLogo extends Component {
  static defaultProps = {
    height: '22px',
  }
  render() {
    return (
      <LogoWrapper>
        <svg {...this.props} viewBox="0 0 862.2 249.2"><path d="M495.7 249.2c-5.9-1.2-11.8-1.9-17.5-3.6-29.8-8.8-48.5-28.7-54.3-58.9-5-25.9-1.8-51.2 13.5-73.9 12.4-18.4 29.6-30.3 51.3-34.1 23.5-4.2 45.8.3 65.4 14.6 12.8 9.3 20.6 22.4 26.3 36.9.5 1.3 1.1 2.6 2.1 5.2 1.7-2.7 2.8-4.5 3.9-6.3 4.2-7.2 7.7-15 12.8-21.4 13.3-16.9 30.7-26.9 52.5-29.6 13.5-1.7 26.3-.3 38.8 4.1 26.8 9.5 42.9 28.7 49.5 56.2 2.4 10.1 3 20.3 2.3 30.5-1.3 17.7-5.8 34.7-16.6 49.1-13.3 17.7-30.8 28.5-53.4 30.2-.7.1-1.4.6-2.2.9h-16.4c-4.4-.8-8.9-1.4-13.3-2.3-15.3-3.3-28.5-10.7-39.4-21.9-7.5-7.7-12.5-17.2-16.7-27.1-.7-1.7-1.8-3.3-3-5.3-1.2 2.3-2 3.7-2.7 5.2-.7 1.5-1.2 3.1-1.8 4.7-9.1 20.1-23.4 35-44.7 42-6.1 2-12.4 3.2-18.6 4.7-6 .1-11.9.1-17.8.1zm199-81c-1.1-10.1-1.7-20.4-3.6-30.4-1.7-9.2-4.5-18.2-9.9-26.1-4.6-6.6-10.3-11-18.8-10.2-1.7.2-3.4.1-5 0-7.5-.2-13.1 3.4-17.5 9.2-9.6 12.8-11.7 28-12.2 43.2-.4 10.8.7 21.7 2.6 32.4 1.8 10.4 5 20.7 12 29.2 5.6 6.9 13 10.9 21.7 10.4 11.4-.7 19.4-7 23.6-17.8 5-12.8 6.8-26.1 7.1-39.9zm-158.3-.2c-.6-7.5-1.1-15-1.8-22.5-1.1-10.7-4.1-20.8-8.9-30.3-7.8-15.3-22.8-16.6-35.9-11.1-5.2 2.2-8.4 6.8-11 11.6-6.5 12-8.3 25.2-9.2 38.5-.4 5.8.4 11.7 1.2 17.5 1.1 8.2 1.9 16.6 4.1 24.5 2.5 9.1 6.5 17.8 14.2 23.9 6 4.7 12.4 6.9 20.3 5.4 11.6-2.2 17.6-9.8 21.3-19.9 4.5-12.2 5.9-24.8 5.7-37.6zM71.1 249.2c-3.6-.7-7.2-1.4-10.8-2.2-29.7-6.6-47.6-25.5-56.2-53.9C1 182.7-.5 171.8.2 160.9c1.4-25.5 10.3-47.8 29.9-64.8C41.7 85.9 55.4 80 71.2 78c20-2.5 38.1 1.5 54.9 12.4 13.6 8.8 21.1 21.8 24.7 37.2 1.8 7.6 3.1 15.4 1.6 23.5-.5 2.9-1.4 4.6-4.3 5.2-1.2.2-2.4.8-3.6.8-12 .5-23.9 1-35.9 1.3-10.7.2-21.5-.1-32.2.1-7.3.1-14.6.8-22 1.3-2.2.1-4.2.7-4.5 3.4-1.8 17.2 1.8 32.9 13.7 45.7 9.2 9.9 21.7 12.1 34.6 10.6 14.2-1.6 26.1-8.2 36.8-17.5 5.7-5 7.7-4.7 13.2.8 2 2 3.6 4.6 5.3 6.8-3.9 9.7-11.1 16.1-18.8 22.1-11.1 8.6-23.8 13.7-37.5 16.3-2.8.5-5.7.8-8.5 1.1-5.8.1-11.7.1-17.6.1zM107 136.1c1.3-7.8.5-15-2.6-21.7-2.6-5.7-6.6-11.1-12.7-12.1-8.5-1.4-17.6-2.8-25.3 3.2-2.7 2.2-5.2 4.8-7.3 7.6-5 6.7-7.5 14.4-8.6 23H107zM799 249.2c-3-.6-6.1-1-9.1-1.7-18.2-4.4-28.5-16.7-32.6-34.2-1.8-7.4-2.5-15.2-2.6-22.9-.3-21.7-.1-43.4-.1-65.1v-3.8c-.2-9.1-1.6-10.8-10.4-12.3-9.2-1.6-11.1-3.8-11.1-13.2v-1.3c-.1-9.7-.4-10.6 9.9-14.4 14.4-5.3 23.4-16.5 30.4-29.5.6-1.1 1.2-2.2 1.7-3.4 1.8-4.5 5-6.4 9.9-5.8 2.3.3 4.6 0 6.9.1 6.9 0 8.2.9 8.7 7.6.7 8.8 1 17.6 1.3 26.4.2 6.3.2 6.4 6.4 6.4h27.2c2.1 0 4.1.2 6.9.3 0 7.2.1 14.1-.1 21 0 1.1-1.8 2.9-3 3.1-4.5.8-9.1 1.1-13.7 1.4-6 .5-12.1.9-18.1 1.3-3.5.2-5.3 1.9-5.5 5.5-.3 5.4-1.1 10.8-1.2 16.3-.2 17.3-.3 34.5.1 51.8.1 6.8 1.2 13.7 2.3 20.4 2.6 14.9 17.2 20.4 31.5 10.6 4-2.7 7.5-6 11.2-9.2 2.9-2.5 5.7-3.3 8.7-.1 2.5 2.7 5.2 5.3 7.8 8v5.1c-10.2 15.4-23.6 26.2-42.1 29.9-3.2.6-6.5 1.2-9.7 1.7H799z" /><path d="M397.7 82h35.9v24.3c-5 .5-10.1 1-15.2 1.5-4.8.5-9.6.7-14.3 1.4-3.2.5-5.2 2.5-5.4 6v99.2c0 1 .1 2.1.2 3.6 6.9 1.1 13.8 2.3 21.3 3.5v18.4c0 2.8-1.3 4.3-4.2 4.4H260.6c-1.9 0-3.7-.2-6.5-.3 0-5.8-.1-11.4.1-17 .1-1.2 1.3-2.5 2.3-3.5.9-.8 2.2-1.2 3.4-1.6 7.8-2.5 11.6-8.2 11.8-15.9.7-17.8 1.7-35.7 1-53.5-.4-9.4-.1-19.2-3.5-28.5-3.1-8.5-7.8-14.1-17.7-15.3-10.5-1.3-19.7.7-28.4 6.4-3.8 2.5-5.3 5.2-5.3 9.7.2 21.1.2 42.1 0 63.2 0 5.2-.9 10.5-.9 15.7 0 4.6.8 9.2 1.2 14.2 6.1 1 12.2 2.1 18.4 3.2v22.7c-2 .2-3.8.4-5.6.4h-72c-6.9 0-7.8-.8-7.2-7.6.6-7 2-13.7 10.1-16.3 3.9-1.2 6.2-4.3 6.9-8.2.8-4.3 1.7-8.6 1.8-13 .2-19.2 0-38.3.1-57.5 0-4 .8-7.9.8-11.9 0-4.2-.4-8.4-1.2-12.4-.3-1.3-2.5-2.6-4-3.1-2.8-.8-5.7-.9-8.6-1.5-4.1-.8-6.8-3.5-7.1-7.6-.3-3.8-.1-7.6-.1-11.4 0-2.9 1.5-3.9 4.3-4.3 5.6-.6 11.1-2 16.7-2.3 7.6-.5 14.7-2.5 21.8-4.9 6.5-2.2 13.3-3.7 20.6-2.3 1.7 4 3.5 8.1 5.2 12 9.9-4.1 19-8.2 28.4-11.5 15-5.3 29.8-4.1 44.3 2.6 9.3 4.3 15.6 11.2 19.5 20.3 4 9.2 5.7 19 6.6 29 2.4 27.5.5 55.1 1.2 82.6.1 5.3.3 4.7 5.3 6.4 6.2 2 12.1.7 17.9-.4 4.1-.8 6.7-4.5 7.7-8.4 1.3-5.2 2.6-10.6 2.6-16 .2-27.8.1-55.6.1-83.4 0-.6-.3-1.2-.5-2.3-4.6-.5-9.3-1-14-1.6-2-.3-4.1-.8-6.1-1.2-2.6-.5-3.4-2.2-3.3-4.6 0-5.3-.1-10.5 0-15.8.1-4.3.9-5.2 5.1-5.4 3.4-.2 6.7 0 10.1-.1 6.2-.1 7.1-.7 8.3-6.7.5-2.2.3-4.6.4-6.9.6-13.6 2.3-27.1 8.9-39.3 9.1-16.9 23.6-25.9 42.6-28 4.1-.4 8.4-1.5 12.4-1.1 9.3.8 18.8 1 27 6.3 7.9 5.1 13.1 11.6 11.9 21.7-.5 3.9-.3 8-1.5 11.7-1.6 4.7-5.4 7.5-10.5 9-11 3.2-23.9-.6-25.3-13.6-.1-1.2-.8-2.4-1-3.6-1.6-6.7-1.8-6.9-6-7.1-5.5-.3-9.3 1.8-11 6.4-.5 1.4-1 2.8-1.2 4.2-1.5 15.4-2 30.8-1.2 46.9z" /></svg>
      </LogoWrapper>
    )
  }
}

