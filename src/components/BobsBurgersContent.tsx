import BBPreview from "./BBPreview";
import {type Character} from "../types"
import styled from "styled-components";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: yellowgreen;
`;


export default function BobsBurgersContent({ data }: { data: Character[] }) {
    return (

        <AllCharsDiv>
            {data.map((char) => (
                <BBPreview key={char.id} character={char} />
            ))}
        </AllCharsDiv>
    );
}


