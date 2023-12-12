import { CarConfigs } from "../configurator/interfaces";

// Esta função recebe outra função (func) e um atraso (delay) como argumentos
export function debounce(func: () => void, delay: number) {
  let timerId: ReturnType<typeof setTimeout>; // Variável para armazenar o identificador do temporizador

  // Esta função é retornada por debounce e será executada sempre que a função debounced for chamada
  return () => {
    clearTimeout(timerId); // Limpa o temporizador existente

    // Define um novo temporizador para executar a função após o atraso especificado
    timerId = setTimeout(() => {
      func(); // Chama a função fornecida (func) com os argumentos recebidos
    }, delay);
  };
}


export const getPurchaseCode = (configs: CarConfigs) => {
  return `pc=${configs.exteriorDesign.primaryColor.code}&sc=${configs.exteriorDesign.secondaryColor.code}&wt=${configs.exteriorDesign.wheelType.code}&bc=${configs.exteriorDesign.brakesColor.code}&lc=${configs.interiorDesign.leatherColor.code}`;
}
