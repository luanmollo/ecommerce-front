import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header/Header"

export const RootLayout = () => {
  return (
    <div>
        <Header />
        <div className="page">
            <Outlet/>
        </div>
    </div>
  )
}
