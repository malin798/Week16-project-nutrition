import React, { useState } from 'react';

export const NovaGroup = ({ group }) => {
  if (group === '1') {
    return <p><span className="bold">Nova group: </span> Unprocessed or minimally processed foods</p>;
  } else if (group === '2') {
    return <p><span className="bold">Nova group: </span> Processed culinary ingredients</p>;
  } else if (group === '3') {
    return <p><span className="bold">Nova group: </span> Processed foods</p>;
  } else if (group === '4'){
    return <p><span className="bold">Nova group: </span> Ultra-processed food and drink products</p>;
  }
  else return <></>
};
