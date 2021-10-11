import styled from 'styled-components';
import { ArrowDown } from 'react-bootstrap-icons';
import { ReactComponent as AppDevSVG } from '../../assets/app_development_SVG.svg';

import { Title } from '../shared/Title';

export const AppDevStyled = styled(AppDevSVG)`
  max-width: 12.125em;
  max-height: 13.875em;

  align-self: flex-end;
`;

export const LandingTitle = styled(Title)`
  align-self: ${(props) => (props.right ? 'flex-end' : 'flex-start')};
  text-align: ${(props) => (props.right ? 'right' : 'left')};
  color: ${(props) => (props.right ? props.theme.colors.main : '#000')};
  text-transform: uppercase;
`;

export const ArrowDownIcon = styled(ArrowDown)`
  align-self: center;
  
`;
