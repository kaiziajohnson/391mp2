import BobsBurgersContent from "./components/BobsBurgersContent.tsx";
import {useEffect, useState} from "react";
import {type Character} from "./types";



export default function App() {
    // so first value can be anything but next has to be set value name
    const[data, setData] = useState<Character[]>([]);

    useEffect(() => {
        async function fetchData() {
            const rawData = await fetch("https://bobsburgers-api.herokuapp.com/characters");
            const results : Character[] = await rawData.json();
            setData(results);
        }
        fetchData()
            .then(()=>console.log("It's been fetched"))
            .catch((e)=> console.log("This error: "+ e +"occured"))

    }, [data.length]);

    return (
        <>
            <BobsBurgersContent data = {data} />
        </>
    )
}
