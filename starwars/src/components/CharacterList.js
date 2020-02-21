import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard"
import axios from "axios";
import { Container, Row } from "reactstrap";

export default function CharcterList() {
    const [characters, setCharacters] = useState ([]);

    useEffect (() => {
        axios
        .get(`https://swapi.co/api/people`)
        .then(response => {
            console.log(response.data.results)
            setCharacters(response.data.results)
              
        })
 }, [])
    return(
        <Container>
        <Row>
            {characters.map(characters => {
        return <CharacterCard characters={characters} key={characters.id} />;
      })}  </Row>
    </Container>
  
    )
}


