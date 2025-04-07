import { UserRow } from "./UserRow";
import { useUsers } from "../hooks/useUsers";

export const UserPage = () => {
  const { users } = useUsers();

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="w-[500px] bg-black rounded-xl text-white">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {
          users.map(( user ) => (
            <UserRow key={user.id} user={user} />
          ))
          }
        </tbody>
      </table>

      <div className="flex justify-between w-[500px] mt-2">
        <button className="p-2 bg-blue-500 text-white rounded-[5px]">
          Anteriores
        </button>
        <button className="p-2 bg-blue-500 text-white rounded-[5px]">
          Siguientes
        </button>
      </div>
    </>
  );
};
