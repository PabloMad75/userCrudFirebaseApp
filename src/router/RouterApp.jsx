import { Routes, Route } from 'react-router-dom'
import { HomePage, CreatePage, EditPage, NotFound } from '../views/indexView'


export const RouterApp = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='create' element={<CreatePage/>} />
            <Route path='edit/:id' element={<EditPage/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </>
  )
}
