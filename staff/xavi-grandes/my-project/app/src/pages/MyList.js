import log from "../utils/coolog";
import { useContext, useEffect, useState } from "react";
import Context from "../components/Context";
import retrieveUser from "../logic/retrieveUser";
import Header from "../components/Header";
import CreateProductComponent from "../components/CreateProductComponent";
import { errors } from "com";
// import retrieveProducts from "../logic/retrieveProducts";
const { FormatError, AuthError, LengthError, NotFoundError } = errors;

export default function Home() {
  log.info("Home -> render");

  const [user, setUser] = useState();
//   const [products, setProducts] = useState();
  const [isCreateOpen, setCreateOpen] = useState(false);

  const { showAlert } = useContext(Context);

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token)
        .then((user) => {
          setUser(user)
        
        //   return retrieveProducts(sessionStorage.token)
        })
        // .then((products) => setLists(products))
        .catch((error) => {
          if (
            error instanceof TypeError ||
            error instanceof FormatError ||
            error instanceof LengthError
          )
            showAlert(error.message, "warn");
          else if (error instanceof AuthError || error instanceof NotFoundError)
            showAlert(error.message, "error");
          else showAlert(error.message, "fatal");
        });
    } catch (error) {
      if (
        error instanceof TypeError ||
        error instanceof FormatError ||
        error instanceof LengthError
      )
        showAlert(error.message, "warn");
      else showAlert(error.message, "fatal");
    }
  }, []);

  const toggleCreateProductView = () => {
    setCreateOpen(!isCreateOpen)
  }


//   const handleCreatedList = () => {
//     retrieveProducts(sessionStorage.token)
//       .then((products) => {setLists(products);

//         toggleCreateProductView();
//     });
//   };



//   const handleListDeleted = () => {
//     try {
//       retrieveProducts(sessionStorage.token)
//       .then((products) => {setLists(products);

//             setListIdToDelete()
//         })
//     } catch (error) {
//         alert(error.message)
//     }
// }


  return (
    <>
        {isCreateOpen && <CreateProductComponent onClose={toggleCreateProductView} />}

      {user && <Header userName={user.name} />}
      <main className="mt-[3rem] flex flex-col gap-2 items-center">
        <p>Aquí irán los productos en lista </p>
      </main>
      <footer className="z-10 fixed bottom-0 h-[4rem] flex justify-center items-center w-full bg-gray-200">
        <button
          className=" bg-blue-400 h-[3rem] w-2/5 text-white text-xl p-2 flex justify-center items-center rounded-lg" onClick={toggleCreateProductView}>+ Añadir</button>
      </footer>
    </>
  );
}
