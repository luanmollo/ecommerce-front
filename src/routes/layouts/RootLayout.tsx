import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header/Header"

export const RootLayout = () => {
  return (
    <div style={{height: "100vh"}}>
        <Header />
        <div className="page">
            <Outlet/>
        </div>
    </div>
  )
}
