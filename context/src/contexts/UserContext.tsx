import { createContext, Dispatch, SetStateAction } from "react";

type UserContextType = {
  isOnline: boolean,
  setIsOnline : Dispatch<SetStateAction<boolean>>
}
const UserContext = createContext<UserContextType>({
  isOnline : false,
  setIsOnline : () => {}
});

export default UserContext;