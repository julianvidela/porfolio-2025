import React from 'react';
import './Background.css'; // Asegúrate de enlazar el archivo CSS

const Background: React.FC = () => {
  return (
    <div className="bg-gradient">
      <div className="bg-radial g1"></div>
      <div className="bg-radial g2"></div>
      <div className="bg-radial g3"></div>
    </div>
  );
};

export default Background;
