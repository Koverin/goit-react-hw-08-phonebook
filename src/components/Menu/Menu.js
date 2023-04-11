import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operation';
import { useAuth } from '../../hooks/useAuth';

export const Menu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <h3>Welcome, {user.name}</h3>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
