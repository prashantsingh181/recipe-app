import { useContext } from "react";
import { GlobalContext } from "../context";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
    const { searchParams, setSearchParams, handleSearch } = useContext(GlobalContext);


    return <form className="w-[30%] min-w-64 mx-auto mb-4" onSubmit={(e) => {
        e.preventDefault();
        handleSearch(searchParams);
    }} autoComplete="off">
        <div className="w-full rounded-full dark:bg-dark bg-light flex flex-row items-center px-4 focus-within:outline focus-within:dark:outline-light focus-within:outline-dark">
            <BsSearch className="border-0" />
            <input
                type="text"
                name="search"
                placeholder="Enter Recipe Name..."
                className="rounded-full px-4 py-2 w-full bg-inherit focus:outline-0"
                value={searchParams}
                onChange={(event) => setSearchParams(event.target.value)}
                autoFocus
            />
        </div>
    </form>
}