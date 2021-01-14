import React from 'react';
import Icon1 from '../../images/frontSteps.jpg';
import Icon2 from '../../images/demo.jpg';
import Icon3 from '../../images/outDoors.jpg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Remodels</ServicesH2>
          <ServicesP>
            Bath, kitchen, and much more.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Demo</ServicesH2>
          <ServicesP>
            I tear your floor and the dance floor.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Out Doors</ServicesH2>
          <ServicesP>
            Handrails to outdoor living spaces. I'm great at it all
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
