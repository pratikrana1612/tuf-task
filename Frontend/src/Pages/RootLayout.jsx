import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
export default function RootLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}
