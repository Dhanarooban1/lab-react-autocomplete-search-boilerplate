import React, { useEffect, useState } from 'react'
import data from "../../resources/countryData.json";


export default function AutoComplete() {
const [InputText,SetText] = useState('');
const [Data,SetData] = useState([])
const [Suggest, setSuggest] = useState(true);

function handle(e) {
    e.key == "Escape" ? setSuggest(!Suggest) : null;
  }

useEffect(()=>{
    let list = data.map((ele , index)=>{
        return ele.name.toLocaleLowerCase().includes(InputText.toLocaleLowerCase()) && InputText != "" ?(
            <p key={index}>{ele.name}</p>
        ): null
    })
    SetData(list)
}, [data, InputText]); // Add this line




  return (
    <div id="wholeContainer">
    <input 
    type="text"
    value={InputText}
    onChange={(e)=>SetText(e.target.value)}
    onKeyDown={(e) => handle(e)}
    />
      {Suggest ? Data: null}
    </div>
  )
}
