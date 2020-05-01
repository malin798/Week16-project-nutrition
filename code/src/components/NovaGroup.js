import React from 'react';



export const NovaGroup = ({ group }) => {

  let novaGroupList = [];
  
  novaGroupList['1'] = {
    text: "Unprocessed or minimally processed foods"
  }
  novaGroupList['2'] = {
    text: "Processed culinary ingredients"
  }
  novaGroupList['3'] = {
    text: "Processed foods"
  }
  novaGroupList['4'] = {
    text: "Ultra-processed food and drink products"
  }
  novaGroupList[undefined] = {
    text: "Unknown"
  }

    return <p><span className="bold">Degree of processing: </span> {novaGroupList[group].text}</p>;
    
};





