import AuthService from "@src/services/AuthService";
import { addUser, selectUser } from "@src/slices/user";
import { useDispatch, useSelector } from "react-redux";

export function useAuthWithRedux() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log(user);

  async function signin({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    const authenticatedUser = await AuthService.signin({ email, password });
    dispatch(addUser(authenticatedUser));
  }

  return { signin, user };
}
