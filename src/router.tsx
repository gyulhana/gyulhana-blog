import { createBrowserRouter, redirect } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import PostListPage from '@/pages/PostListPage';
import PostPage from '@/pages/PostPage';
import ErrorPage from '@/pages/ErrorPage';
import Layout from '@/pages/Layout';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
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
