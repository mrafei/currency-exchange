import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "react-query";
import type { HOCFunctionalComponent } from "@_types/components";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});
const QueryClientProvider: HOCFunctionalComponent = ({ children }) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};
export default QueryClientProvider;
