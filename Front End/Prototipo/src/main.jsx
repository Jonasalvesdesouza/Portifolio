import React from "react"
import ReactDOM from "react-dom/client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"


import { App } from "./App.jsx"
import { 
  AppBehaviorProvider, 
  ArticlesProvider, 
  MessageMeProvider, 
  ProjectsProvider, 
  UserAdmProvider 
} from "./providers/index.js"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>

        <UserAdmProvider>
          <AppBehaviorProvider>
            <MessageMeProvider>
            
              <ProjectsProvider>
                <ArticlesProvider>
                  <App />
                </ArticlesProvider>
              </ProjectsProvider>

            </MessageMeProvider>
          </AppBehaviorProvider>
        </UserAdmProvider>
        
      </BrowserRouter> 
    </QueryClientProvider>

    <ToastContainer
      theme="light" 
    />
    
  </React.StrictMode>,
)
