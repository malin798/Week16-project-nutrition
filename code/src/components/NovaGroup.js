import React, { useState } from 'react';

export const NovaGroup = ({ group }) => {
  if (group === '1') {
    return <p>Unprocessed or minimally processed foods</p>;
  } else if (group === '2') {
    return <p>Processed culinary ingredients</p>;
  } else if (group === '3') {
    return <p>Processed foods</p>;
  } else {
    return <p>Ultra-processed food and drink products</p>;
  }
};
