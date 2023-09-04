import { styled } from 'styled-components';
import background from '../pictures/photo_2023-04-07_14-08-17.jpg';

export const DIV = styled.div`
  background-image: url(${background});

  height: 200px;
  /* margin: 10px 10px; */
  /* background-position: 50% 10px; */
  background-size: 40%;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const H1 = styled.h1`
  display: block;
  text-align: center;
  margin: 0;
  background-color: #7bac91;
  padding: 10px;
  -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: -10px 0px 13px -7px #3b7a57, 10px 0px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #101a9e;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: uppercase;
  color: #616161;
  background: #bababa;
  text-shadow: #e0e0e0 1px 1px 0;
  color: #616161;
  background: #bababa;
`;

export const BUTTON = styled.li`
  display: flex;
  box-shadow: 0px 10px 14px -7px #276873;
  background: linear-gradient(to bottom, #599bb3 5%, #408c99 100%);
  background-color: #599bb3;
  border-radius: 5px;

  min-width: 250px;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 22px;
  padding: 10px 15px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
  margin-bottom: 15px;

  a {
    padding-left: 10px;
    text-decoration: none;
    color: white;
  }
`;
