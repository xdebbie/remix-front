import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../LoginButton/LoginButton";
import { LogoutButton } from "../LogoutButton/LogoutButton";
import { Wrapper } from "./Sidebar.styled";

export const Sidebar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <Wrapper>
      <h1>remix</h1>
      {isAuthenticated ? (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
          <LogoutButton />
        </div>
      ) : <LoginButton />}
    </Wrapper>
  );
};