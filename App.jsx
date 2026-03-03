import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './src/components/layout/Layout';
import HomePage from './src/pages/HomePage';
import CollectionsPage from './src/pages/CollectionsPage';
import ProductDetailPage from './src/pages/ProductDetailPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'collections', element: <CollectionsPage /> },
        { path: 'product/:id', element: <ProductDetailPage /> },
      ],
    },
  ]
)

export default function App() {
  return <RouterProvider router={router} />
}
