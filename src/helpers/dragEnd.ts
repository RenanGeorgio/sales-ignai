import { DragResult } from "@types";

type Item = { _id: string | number; }

export default function dragEnd(columns: any[], dragResult: DragResult){
  const { source, destination, draggableId } = dragResult;

  if (!destination) { // Se não houver destino, não faz nada
    return;
  }

  const sourceColumn = columns.find(column => column._id === source.droppableId);
  const destinationColumn = columns.find(column => column._id === destination.droppableId);

  if (!sourceColumn || !destinationColumn) { // Se uma das colunas não for encontrada, não faz nada
    return;
  }

  const draggedItem = sourceColumn.items.find((item: Item) => item._id === draggableId);

  if (!draggedItem) { // Se o item arrastado não for encontrado, não faz nada
    return;
  }

  const sourceItems = Array.from(sourceColumn.items);
  const destinationItems = Array.from(destinationColumn.items);

  sourceItems.splice(source.index, 1); // Remove o item arrastado da coluna de origem

  if (source.droppableId === destination.droppableId) {
    sourceItems.splice(destination.index, 0, draggedItem); // Insere o item arrastado na nova posição na coluna de origem
  } else {
    destinationItems.splice(destination.index, 0, draggedItem); // Insere o item arrastado na nova posição na coluna de destino
  }
  
  const newColumns = columns.map(column => {
    if (column._id === sourceColumn._id) {
      return { ...column, items: sourceItems };
    } else if (column._id === destinationColumn._id) {
      return { ...column, items: destinationItems };
    } else {
      return column;
    }
  });
  
  return newColumns;
}