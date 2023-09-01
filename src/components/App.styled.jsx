import { styled } from 'styled-components';
import background from './LogoV2_rounded.png';

export const DIV = styled.div`
  background-image: url(${background});
  /* border: 1px solid #3d1cf8; */
  border-radius: 10px;
  height: 200px;
  margin: 10px 10px;
  background-position: 50% 10px;
  background-size: 40%;
  background-repeat: no-repeat;
`;

export const H1 = styled.h1`
  display: block;
  text-align: center;
  border: 1px solid black;
  background-color: #3b7a57;
  padding: 10px;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: -10px 0px 13px -7px #3b7a57, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
`;
