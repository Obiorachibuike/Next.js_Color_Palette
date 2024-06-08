import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const ColorBlock = ({ index, color, onColorChange }) => {
  const handleChange = (e) => {
    onColorChange(index, e.target.value);
  };

  return (
    <Draggable draggableId={`color-${index}`} index={index}>
      {(provided) => (
        <div
          className="colorBlock"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{ backgroundColor: color }}
        >
          <input
            type="color"
            value={color}
            onChange={handleChange}
            className="colorInput"
          />
        </div>
      )}
    </Draggable>
  );
};

export default ColorBlock;
