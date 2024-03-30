import { Routes, Route } from 'react-router-dom'

import { PublicRoute } from '../PublicRoute'
import { PrivateRoute } from '../PrivateRoute'

import { 
    NotFoudPage, 
    HomePage,
    ProjectsPage, 
    BlogPage,
    CurriculumPage,
    ArticlePage
} from '../../pages'


export const RouterMain = () => {

    return(
        <Routes>
            
            <Route element={ <PublicRoute /> }>
                <Route path='/' element={ <HomePage/> } />
                <Route path='/projects' element={ <ProjectsPage /> } />
                <Route path='/blog' element={ <BlogPage /> } />
                <Route path='/curriculum' element={ <CurriculumPage /> } />
                <Route path='/articlepage' element={ <ArticlePage /> } />
            </Route>

            <Route element={ <PrivateRoute /> }>
            </Route>

            <Route path='*' element={ <NotFoudPage /> } />

        </Routes>
    )
}