import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/video.mp4';
import sambg from '../../images/kitchen.jpg'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const bgstyle = {
    width: '100vw',
    height: '100vh'
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <img style={bgstyle} src='https://cdn.hipwallpaper.com/i/30/74/gbnNUq.jpg'  />
      </HeroBg>
      <HeroContent>
        <HeroH1>SamPro LLc</HeroH1>
        <HeroP>
          With Years of experience mix with years of passion
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
