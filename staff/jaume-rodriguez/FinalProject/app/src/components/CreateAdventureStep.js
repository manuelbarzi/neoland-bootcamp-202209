import { useState } from 'react'
import createAdventureStep from '../logic/createAdventureStep';
import bgCreateAdventureStep from '../img/bg-create-adventure-step.png';
import buttonAddNewStep from '../img/button-add-new-step.png';
import buttonAddNewStepActive from '../img/button-add-new-step-active.png';
import buttonCancel from '../img/button-cancel.png';

function SetName({ onClose, onCreated, adventureId }) {

    const [hoverButtonCreateAdventure, setHoverButtonCreateAdventure] = useState(false)

    // FORM SUBMITS
    const handleCreateAdventureSubmit = (event) => {
        event.preventDefault();

        let { text: { value: text } } = event.target

        try {
            createAdventureStep(sessionStorage.token, adventureId, text)
                .then(() => {
                    //alert('The Adventure Step has been changed successfully')
                    onClose()
                })
                .then(() => onCreated())
                .catch(error => alert(error.message))

        } catch (error) {
            alert(error.message)
        }
    };


    return (
        <section className="bg-[#191919]/75 fixed left-0 top-0 h-full w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="flex flex-col items-center justify-center -mt-[1.5rem]" onClick={event => event.stopPropagation()}>
                <img
                    className=''
                    src={bgCreateAdventureStep}
                    alt="createAdventure" />
                <form className="flex flex-col items-center " onSubmit={handleCreateAdventureSubmit}>
                    <textarea
                        name='text'
                        type="text"
                        placeholder="Step text"
                        id="text"
                        title="Please enter at least 1 character"
                        className="px-4 py-2 h-[10rem] w-[17rem] bg-inherit text-white text-center text-sm rounded-xl autofill:bg-black absolute -mt-[17.5rem] ml-[0.4rem] resize-none scrollbar"
                    />
                    <section className='flex flex-row absolute justify-center gap-x-3 -mt-[5.5rem]'>
                        <img
                            className="cursor-pointer"
                            src={buttonCancel}
                            alt="buttonCancel"
                            onClick={onClose}
                        />
                        <button className=''>
                            <img
                                onMouseEnter={() => setHoverButtonCreateAdventure(true)}
                                onMouseLeave={() => setHoverButtonCreateAdventure(false)}
                                className="cursor-pointer"
                                src={hoverButtonCreateAdventure ? buttonAddNewStepActive : buttonAddNewStep}
                                alt="buttonCreateAdventure" />
                        </button>
                    </section>
                </form>
            </div>
        </section >
    );
}

export default SetName