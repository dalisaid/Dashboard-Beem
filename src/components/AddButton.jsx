import React from 'react';
import { Button } from 'react-bootstrap';

export const AddButton = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      style={{
        padding: "10px 22px",
        backgroundColor: "#584cac",
        borderRadius: "6px",
        color: "#fff",
        border: "none",
        fontSize: "18px",
        fontWeight: "400",
        cursor: "pointer",
        boxShadow: "0 5px 10px black rgba(0,0,0,0.1)",
        marginTop: '10px'
      }}
    >
      {text}
    </Button>
  );
}

