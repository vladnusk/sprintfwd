import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Navbar from '../layouts/navbar'


const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={'Loading...'}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
        path: '/',
        element: <Navbar />,
        children: [
          { path: 'teams', element: <Teams /> },
          { path: 'teams/:id', element: <TeamDetails /> },
          { path: 'members', element: <Users /> },
          { path: 'todo', element: <TodoList /> },
        ],
      },
  ])
}

const Teams = Loadable(lazy(() => import('../pages/Teams')));
const Users = Loadable(lazy(() => import('../pages/Users')));
const TeamDetails = Loadable(lazy(() => import('../pages/TeamDetails')));
const TodoList = Loadable(lazy(() => import('../pages/TodoList')));