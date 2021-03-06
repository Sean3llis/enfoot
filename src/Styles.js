import styled, { keyframes } from 'styled-components';

export const BREAK_POINTS = {
  mobile: '(max-width: 767px)',
  tablet: '(max-width: 992px)',
};

export const COLORS = {
  b300: '#333333',
  w: '#f8f8f8'
}

export const theme = {
  linkColor: '#665DAF',
  primary: '#665DAF',
  gradient: 'linear-gradient(45deg, rgba(102,93,175,1) 0%, rgba(135,68,156,1) 100%);',
  b300: '#2b2b38',
  white: '#ffffff',
  offwhite: '#f8f8f8'
}

export const Slat = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 16px;
`;

export const BackgroundImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
`;

export const Title = styled.div`
  font-family: 'Lora', serif;
  font-size: 42px;
  font-weight: bold;
  letter-spacing: -1px;
  text-align: center;
  color: ${props => props.theme.b300};
  @media ${BREAK_POINTS.tablet} {
    font-size: 36px;
  }
  @media ${BREAK_POINTS.mobile} {
    font-size: 28px;
  }
`;

export const CTA = styled.a`
  display: block;
  font-size: 10px;
  padding: 8px 48px;
  letter-spacing: 2px;
  background-color: ${props => props.theme.white};
  text-transform: uppercase;
  margin: 48px auto;
  border: 1px solid ${props => props.theme.white};
  &, &:visited {
    color: ${props => props.color || props.theme.b300};
  }
`;

export const MobileLogo = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  height: 48px;
  margin-top: 18px;
  @media ${BREAK_POINTS.mobile} {
    display: block;
    text-align: center;
  }
`;

export const Column = styled.div`
  padding: 0px 16px;
  width: 33.333%;
  @media ${BREAK_POINTS.tablet} {
    width: 50%;
  }
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
  padding: 20px;
  font-weight: 200;
  font-size: 13px;
  color: ${props => props.theme.b300};
  img {
    width: 100%;
    margin: 24px 0px;
  }
`;

export const FadeRightIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px)
  }
`;

export const FadeRightOut = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0px);
  }
  100% {
    opacity: 1;
    transform: translateX(20px)
  }
`;

export const pulse = keyframes`
  0%, 100% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.3);;
  }
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
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  position: relative;
`;

export const Footer = styled.footer`
  height: ${FOOTER_HEIGHT}px;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.b300};
  align-self: flex-end;
  padding: 32px 16px;
  color: ${props => props.theme.white};
`;

// Animations
const SlideDownInKeys = keyframes`
  0% {opacity: 0; transform: translateY(-10px)}
  50% {opacity: 0;}
  100% {opacity: 1; transform: none;}
`;

const WobbleKeys = keyframes`
  0%, 100% {
    transform: rotateZ(-12deg);
  }
  50% {
    transform: rotateZ(12deg);
  }
`;

export const Wobble = `animation: ${WobbleKeys} ease-in-out 1s`

export const SlideDownIn = `animation: ${SlideDownInKeys} ease-in-out 0.6s;`;

