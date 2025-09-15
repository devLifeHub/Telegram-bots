import { Route, Routes } from "react-router-dom"
import clsx from "clsx";
import TodoPage from "@/components/pages/TodoPage/TodoPage"
import { FC } from "react"
import AuthPage from "@/components/pages/AuthPage/AuthPage"

import '@/styles/reset.css';
import '@/styles/fonts.css';
import '@/styles/global.scss';


const App: FC = () => {

  return (
    <div className={clsx("container")}>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  )
}

export default App
