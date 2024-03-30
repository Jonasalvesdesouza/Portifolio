import { useContext } from 'react'
import { AllProjects } from './AllProjects'
import { ResultProjects } from './ResultProjects'
import { AppBehaviorContext } from '../../../../providers'

export const RenderProjects = () => {
    const { categorysProject } = useContext(AppBehaviorContext)

    return (
        <div>
            {
                categorysProject === '' ? (<AllProjects />) : ( <ResultProjects /> )
            }
        </div>
    )
}