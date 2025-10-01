import styled from "styled-components";
import {type Character} from "../types.ts";



const SingleCharDiv=styled.div<{ $name: string }>`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: ${(props) =>
            props.$name === "Bob Belcher" ? "darkorange" : "yellow"};
    color: ${(props) =>
            props.$name === "Bob Belcher" ? "black" : "darkred"};
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) "Comic Sans MS", cursive;
    text-align: center;
`;

const CharacterImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
`;


export default function BBPreview({ character }: { character: Character }) {
    return (
        <SingleCharDiv $name={character.name}>
            <h1>{character.name}</h1>
            <CharacterImage src={character.image} alt={`image of ${character.name}`} />
        </SingleCharDiv>
    );
}
