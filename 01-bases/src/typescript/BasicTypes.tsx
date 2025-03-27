
export const BasicTypes = () => {

const name:string = "Federico";
const age = 30;
const isActive: boolean = false;


const powers:string[] = ['React', 'ReactNative'];

  return (
    <>
    <h3>Tipos Basicos</h3>

    {name} - {age} - {isActive ? 'Activo' : 'No activo'}

    <p>
        {powers.join(', ')}
    </p>
    
    </>

  )
}

export default BasicTypes
