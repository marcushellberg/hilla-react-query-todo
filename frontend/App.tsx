import {QueryClient, QueryClientProvider} from "react-query";
import router from './routes';
import {RouterProvider} from "react-router-dom";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient();
export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}