import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
  
const Hero = (props) => (
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        I am Kapil Solanke a Pre Final Year Student at NIT Rourkela. I am a Full stack Developer and now trying to take my development skills to next level and build awesome apps.
        </SectionText>
        <Button onClick={props.handleClick}>
          <a href="https://www.linkedin.com/in/kapil-solanke-3714a2153/" target="blank">Learn More</a>
        </Button>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;