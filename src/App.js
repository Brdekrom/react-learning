import React from 'react';
import Parent from './components/Parent/Parent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="App">
            <Parent />
        </div>
      </QueryClientProvider>
    );
}

export default App;