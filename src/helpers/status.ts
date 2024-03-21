export const getStatusStyles = (status: boolean) => {
  const color = status ? "green" : "red";
  return { color };
};

export const priorityStatus = {
  High: "Alta",
  Medium: "Média",
  Low: "Baixa",
};

export const getPriorityStyles = (priority: string) => {
  let color: string, backgroundColor: string;

  if (priority === "High") {
    color = "white";
    backgroundColor = "red";
  } else if (priority === "Medium") {
    color = "white";
    backgroundColor = "orange";
  } else if (priority === "Low") {
    color = "white";
    backgroundColor = "lightgreen";
  } else {
    color = "black";
    backgroundColor = "white";
  }

  return { color, backgroundColor };
};

export const getPaymentStatusStyles = (status: string) => {
  let color: string, backgroundColor: string;

  if (status === "Paga") {
    color = "#00CFE8";
    backgroundColor = "rgba(0, 207, 232, 0.16)";
  } else if (status === "Aguardando") {
    color = "#FF9F43";
    backgroundColor = "rgba(255, 159, 67, 0.16)";
  } else if (status === "Atrasada") {
    color = "#28C76F";
    backgroundColor = "rgba(40, 199, 111, 0.16)";
  } else if (status === "Cancelada") {
    color = "#7367F0";
    backgroundColor = "rgba(115, 103, 240, 0.16)";
  } else {
    // Tratamento padrão caso a prioridade não seja reconhecida
    color = "black";
    backgroundColor = "white";
  }

  return { color, backgroundColor };
};