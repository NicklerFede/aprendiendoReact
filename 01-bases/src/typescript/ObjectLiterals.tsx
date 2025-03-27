interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}



export const ObjectLiterals = () => {

  const person: Person = {
    age: 38,
    firstName: "Federico",
    lastName: "Nickler",

    address: {
      country: "Argentina",
      houseNo: "4000"
    }
  }



  return (<>
    <h3>Objetos Literales</h3>
    
    <pre>
      { JSON.stringify(person, null, 2)}
    </pre>
    
    </>)
}

export default ObjectLiterals
