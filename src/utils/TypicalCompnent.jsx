import { Heading } from '@chakra-ui/react';
import React from 'react';
import Typical from 'react-typical';

function TypicalCompnent() {
  return (
    <Heading>
      <Typical
        steps={[
          'JavaScript Developer!',
          1500,
          'Self Learner!',
          1500,
          'Front-end Developer!',
          1500,
        ]}
        loop={Infinity}
        wrapper="p"
      />
    </Heading>
  );
}

export default TypicalCompnent;
