
const addTwoNumbers = (a:number, b:number): string => {
    return `${a + b}`;
};

export const BasicFunctions = () => {
  return (
    <>
    <h3>Funciones</h3>
    <span>El resultado de sumar 8 + 2 = {addTwoNumbers(2, 8)}</span>
    </>
  );
};