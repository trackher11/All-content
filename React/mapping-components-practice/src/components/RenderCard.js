// eslint-disable-next-line
import React from "react";
import emojipedia from "../emojipedia";
import CardTemplate from "./CardTemplate";

function RenderCard(emojipedia){
    return (<CardTemplate 
        key = {emojipedia.id}
        emoji = {emojipedia.emoji}
        name = {emojipedia.name}
        meaning = {emojipedia.meaning}
    />)
}

function RenderCards() {
    return (
        emojipedia.map( RenderCard)
          
    );
  }

export default RenderCards;