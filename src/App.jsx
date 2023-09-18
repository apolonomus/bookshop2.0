import Router from './router/Router';

import { db } from './firebase/client';

import { getDocs, collection, query, where, limit, getDoc, doc } from 'firebase/firestore'
import { useEffect } from 'react';

function App() {
    const productRef = collection (db, 'products')

    const getProducts = async () => {

        const data = await getDocs(productRef)
        const dataFiltrada = data.docs.map((doc) => ({...doc.data(), id: doc.id} ))
        console.log(dataFiltrada)
        //const productsRefFilter = query (
        //    collection(db, 'products'),
          //  where('price','>',999), 
          //  limit(1)
        //)
        //getDoc (productRef).then((snapshot => {
           // if (snapshot.exists()) {
           //     console.log({ id: snapshot.id, ...snapshot.data() } )
          //  }
       // }))
    }
    useEffect(() => {
        getProducts()
    },[]);
    return (
        <Router />
    )
}
export default App
