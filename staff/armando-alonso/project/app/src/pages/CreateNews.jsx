import CreatePublication from '../pages/CreatePublication'
import EditPublication from '../pages/EditPublication'
import log from '../utils/coolog'
import 'tw-elements'
import { useState } from 'react';
import LandingNavbar from '../components/LandingNavbar'
import { Tabs} from 'flowbite-react'
import RecentNewsByUser from '../components/RecentNewsByUser'

function PageCreateNews({ onNavigateToHome }) {
    log.info('CreateNews -> render')

    const [value, setValue] = useState('');
    const [createPublicationVisible, setCreatePublicationVisible] = useState(true)
    const [editPublicationVisible, setEditPublicationVisible] = useState(false)
    const [updateState, setUpdateState] = useState('')


    const updateAllState = (newState) => {
        setUpdateState(newState)
    }

    const navigateToEdit = () => {

        setCreatePublicationVisible(false)
        setEditPublicationVisible(true)
    }

    const navigateToCreate = () => {

        setEditPublicationVisible(false)
        setCreatePublicationVisible(true)
    }


    return (
        <main className="h-screen bg-[#ECF0F5]">

            <nav>
                <LandingNavbar onNavigateToNavHome={onNavigateToHome} />
            </nav>
            <div className=''>
                <Tabs.Group
                    aria-label="Full width tabs"
                    style="fullWidth"
                    >
                    <Tabs.Item title="">

                    </Tabs.Item>
                    <Tabs.Item title="">

                    </Tabs.Item>
                    <Tabs.Item title="">

                    </Tabs.Item>
                    <Tabs.Item title="">

                    </Tabs.Item>
                    <Tabs.Item title="">

                    </Tabs.Item>
                </Tabs.Group>
            </div>


            <div className='flex mx-auto container'>
        <div className='flex flex-wrap basis-3/12 pt-8'>
            <RecentNewsByUser onNavigateToEdit={navigateToEdit} onPublicationIdToEdit={setValue} updatePublicationsState={updateAllState} />
        </div>

            {createPublicationVisible && <CreatePublication onNavigateFromCreateToHome={onNavigateToHome} updateCreateState={updateAllState} />}

            {editPublicationVisible && <EditPublication onNavigateFromEditToHome={onNavigateToHome} onNavigateToCreate={navigateToCreate} publicationId={value} updateEditState={updateAllState} />}

    
        </div>
        </main>
    )
}

export default PageCreateNews