import { createBrowserRouter } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import PostListPage from '@/pages/PostListPage';
import PostPage from '@/pages/PostPage';
import ErrorPage from '@/pages/ErrorPage';
import Layout from '@/pages/Layout';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/index',
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/posts',
        element: <PostListPage />,
      },
      {
        path: '/posts/:id',
        element: <PostPage />,
      },
    ],
  },
]);

export default router;
