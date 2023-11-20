
import React from 'react';

interface FreteButtonProps {
  onClick: () => void;
  loading: boolean;
}

const FreteButton: React.FC<FreteButtonProps> = ({ onClick, loading }) => {
  return (
    <div>
      <button onClick={onClick} disabled={loading}>
        Consultar
      </button>
    </div>
  );
};

export default FreteButton;