import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./modules/home/Home";
import { History } from "./modules/history/History";
import { Profile } from "./modules/profile/Profile";
import { Login } from "./modules/login/Login";
import { Daftar } from "./modules/daftar/Daftar";
import { Keperluan } from "./modules/keperluan/Keperluan";
import { Dashboard } from "./modules/admin/dashboard/Dashboard";
import { AllHistory } from "./modules/admin/history/AllHistory";


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/history",
    element: <History/>
  },
  {
    path:"/profile",
    element: <Profile/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/daftar",
    element: <Daftar/>
  },
  {
    path:"/keperluan",
    element: <Keperluan/>
  },
  {
    path:"/admin/dashboard",
    element: <Dashboard/>
  },
  {
    path:"/admin/history",
    element: <AllHistory/>
  }
])
const App = () => {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
