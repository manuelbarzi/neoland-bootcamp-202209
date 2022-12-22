import { useContext } from "react";
import { Label, TextInput } from 'flowbite-react'
// import Context from './Context'
import 'tw-elements'

const SearchNavbar = ({ onNavigateToCreateNewsNavbar }) => {
  return (
    <div className="w-full">   
            <div className="">
                <Label
                htmlFor="username"
                value=""
                />
            </div>
            <TextInput
                id="username3"
                placeholder="Search"
                required={true}
                addon="@"
            />
        </div>
  );
};

export default SearchNavbar;
