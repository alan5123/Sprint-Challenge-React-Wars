import React from "react";
import styled from "styled-components"
import {
  
 
  
  
  CardBody,
 
  
  Col
} from "reactstrap";

const CardStyle = styled.div `
margin:5%;
background:black;
border-radius:20px;
`

const Name = styled.p `
color:DODGERBLUE;
font-weight:bold;

`

const Info = styled.p `
color:DODGERBLUE;
`



const CharacterCard = ({ characters }) => {
 
  return (
    <Col xs="6" md="4" xl="3">
      <CardStyle >
        <Name>Name: {characters.name}</Name>
        <CardBody>
          <Info>Height: {characters.height}cms </Info>
          <Info>Mass: {characters.mass}kgs </Info>
          <Info>Birth Year: {characters.birth_year} </Info>
        
        </CardBody>
       
      </CardStyle>
    </Col>
  );
};
export default CharacterCard;
