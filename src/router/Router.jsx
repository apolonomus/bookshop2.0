import {
    BrowserRouter,
    Routes, 
    Route
    } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.css';


    export default function Router () {
        return (
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:id' element={<ItemListContainer />} />
                    <Route path='/item/:id' element={<ItemDetailContainer />} />
                    <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                </Routes>
            </BrowserRouter>
        )
    }