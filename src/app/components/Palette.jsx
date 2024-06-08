import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import ColorBlock from './ColorBlock';

const initialColors = [
  '#FF5733', '#33FF57', '#3357FF', '#F7DC6F',
  '#BB8FCE', '#F1948A', '#7DCEA0', '#85C1E9'
];

const Palette = () => {
  const [colors, setColors] = useState(initialColors);

  const handleColorChange = (index, newColor) => {
    const newColors = [...colors];
    newColors[index] = newColor;
    setColors(newColors);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedColors = Array.from(colors);
    const [removed] = reorderedColors.splice(result.source.index, 1);
    reorderedColors.splice(result.destination.index, 0, removed);

    setColors(reorderedColors);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="palette" direction="horizontal">
        {(provided) => (
          <div className="palette" {...provided.droppableProps} ref={provided.innerRef}>
            {colors.map((color, index) => (
              <ColorBlock
                key={index}
                index={index}
                color={color}
                onColorChange={handleColorChange}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Palette;
