import React from 'react';
import styled from 'styled-components';
import { ButtonBase } from '@material-ui/core';

export const Button = styled(ButtonBase)`
  && {
    width: ${props => props.fill ? '100%' : 'fit-content'};
    
    padding: 6px 16px;
    border-radius: 8px;
    
    background: linear-gradient(to right, #8743ff 1%,#4136f1 100%);
    color: #FFF;

    font-size: 14px;
    font-weight: 600;
  }
`;