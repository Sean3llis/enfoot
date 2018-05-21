import styled, { keyframes } from 'styled-components';

export const BREAK_POINTS = {
  mobile: '(max-width: 767px)'
};

export const COLORS = {
  b300: '#333333',
  w: '#f8f8f8'
}

export const theme = {
  linkColor: '#6427b0',
  b300: '#333'
}

export const Slat = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 16px;
`;

export const Column = styled.div`
  width: ${props => (12/props.span/12 * 100 )}%;
  padding: 0px 16px;
  @media ${BREAK_POINTS.mobile} {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  flex-wrap: wrap;
`;

export const ContentBlock = styled.div`
  max-width: 600px;
  margin: 0 auto;
  line-height: 32px;
  padding-bottom: 100px;
  font-weight: 200;
  font-size: 13px;
`;


const scatter = keyframes`
  0%, 100% { background-position: 0 0; }
  10% { background-position: -5% -10%; }
  20% { background-position: -15% 5%; }
  30% { background-position: 7% -25%; }
  40% { background-position: 20% 25%; }
  50% { background-position: -25% 10%; }
  60% { background-position: 15% 5%; }
  70% { background-position: 0% 15%; }
  80% { background-position: 25% 35%; }
  90% { background-position: -10% 10%; }
`;

export const stepper = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px) translateY(-200px) rotateZ(-36deg);
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateX(0px)
  }
`;

export const float = keyframes`
  0% { transform: rotateZ(45deg) }
  50% { transform: rotateZ(45deg) translateY(-6px)}
  100% { transform: rotateZ(45deg) }
`;

export const hover = keyframes`
  0% { transform: none }
  50% { transform: translateY(-6px)}
  100% { transform: none }
`;


export const Badge = styled.div`
  background-color: ${COLORS.b300};
  color: ${COLORS.w};
  font-size: 10px;
  height: ${props => props.height || '48px'};
  width: ${props => props.width || '48px'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${hover} 3s ease-in-out infinite;
`;

const FOOTER_HEIGHT = 300;
export const PageWrapper = styled.div`
  color: #333;
  position: relative;
  display: flex;
  flex-direction: column;
  /* &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    pointer-events: none;
    opacity: 0.8;
    height: 100%;
    width: 100%;
    animation: ${scatter} 1s linear infinite;
  } */
`;

export const Footer = styled.footer`
  height: ${FOOTER_HEIGHT}px;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.b300};
  align-self: flex-end;
`;

// Animations
const SlideDownInKeys = keyframes`
  0% {opacity: 0; transform: translateY(-10px)}
  50% {opacity: 0;}
  100% {opacity: 1; transform: none;}
`;

export const SlideDownIn = `animation: ${SlideDownInKeys} ease-in-out 0.6s;`;

