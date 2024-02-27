"use client"
import { useEffect, useState } from "react";
import { getMainCat, getMostViewed } from "../store/CategoriesSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Home from "./components/Home/Home";
// const FooterBar = dynamic(() => import('/src/Static/FooterBar/FooterBar'), {
//   ssr : false
// })

  //  const Service = dynamic(() => import('/src/Static/Service/Service'), {
  //     ssr : false
  //  })

  // const LastofOffersProducts = dynamic(() => import('/src/Static/اخر المنتجات/LastofOffersProducts'), {
  //       ssr : false
  //  })

export default function App() {
  const dispatch = useDispatch();
  const [Loading  , setLoading] = useState(true)
  const { Categories } = useSelector((state) => state.CategoriesSlice);
 
  useEffect(() => {
    dispatch(getMainCat(0));
    dispatch(getMostViewed())
  }, [dispatch]);

   useEffect(()=>{
     if(Categories){
      setLoading(false)
     }
   })
  return (
   <>
  {/* <Home />
   <Service />
   <LastofOffersProducts />
   <FooterBar />   */}

      {Loading ? <div style={{backgroundColor : 'red' , height : '100vh'}}>loading</div>:
       <Home/>
       
       }


   </>
  )
}
