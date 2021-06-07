import React from 'react';
import styled from 'styled-components';
import { Switch as MSwitch } from '@material-ui/core';


export const Switch = styled(MSwitch)`
  &&{

    .MuiSwitch-thumb{
      background: #8743ff;
    }

    .MuiSwitch-track{
      background: linear-gradient(to right, #8743ff 1%,#4136f1 100%);
    }
  }
`;