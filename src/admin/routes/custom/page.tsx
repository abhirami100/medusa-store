

import { RouteConfig } from "@medusajs/admin";
import { Link } from "react-router-dom"
import './page.css';


const CustomPage = () => {
  return (
    <div className="newpage bg-[#121063] text-[22px] h-full text-black text-center shadow-2xl animate-pulse font-extrabold font-serif brightness-50 bg-gradient-to-r from-purple-500 to-pink-500 uppercase place-self-stretch ">
       <Link to={"/a/products"}>
       <h1> View Products</h1>
      </Link>
    </div>
  )
}

export const config: RouteConfig = {
  link: {
    label: "New Page",
  },
}

export default CustomPage