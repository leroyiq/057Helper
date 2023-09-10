import { styled } from 'styled-components';
import background from '../pictures/photo_2023-04-07_14-08-17.jpg';

export const DIV = styled.div`
  background-image: url(${background});
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  /* margin: 10px 10px; */
  /* background-position: 50% 10px; */
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
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
  align-items: center;
  box-shadow: 0px 10px 14px -7px #252525;
  background-color: #6c7072;
  border-radius: 5px;
  min-width: 300px;
  cursor: pointer;

  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  padding: 10px 15px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;

  a {
    padding-left: 10px;
    text-decoration: none;
    color: white;
  }
`;
