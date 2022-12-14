import { useEffect, useState } from 'react'
import getUserInformation from '../logic/userSettings'
import SettingsForm from '../components/settingsForm'


function Settings(){

    const [userInfo, setUserInfo] = useState([])


    const fetchInfo = async () => {
        const fetchedInfo = await getUserInformation()
        setUserInfo(fetchedInfo)
    }

    useEffect(() => {
        fetchInfo()
    }, [])
   
    return(
        <main className="w-screen min-h-full bg-bone flex justify-center pt-10">
         <div className="w-11/12">
                <h2> This is the latest personal info we have from you, {userInfo.name}. Edit what has changed and click to save</h2>
                <SettingsForm userInfo={userInfo}></SettingsForm>
         </div>
        </main>
    )
}
export default Settings