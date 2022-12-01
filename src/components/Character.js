// Write your Character component here
// Write your Character component here
import React from "react";
import styled from "styled-components";

const CharacterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    font-size: 40px;
    padding: 1rem;
    border: 2px green solid;
    margin: 1rem;
    height: 50px;
  }
`;

export default function Character(props) {
  const { starWarsCharacters } = props;

  return (
    <CharacterDiv>
      {starWarsCharacters.map((objPeople, index) => {
        return (
          <div key={index}>
            <h2>{objPeople.name}</h2>
            <h2>{objPeople["birth_year"]}</h2>
          </div>
        );
      })}
    </CharacterDiv>
  );
}
