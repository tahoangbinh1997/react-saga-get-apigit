import React, { useCallback, useState } from 'react';

const SearchBar = ({userData, addUser, fetchUser}) => {

    let [username, setUsername] = useState('')

    const _onSubmit = (event) => {
        event.preventDefault();
        fetchUser(username);
    }

    const _onChange = (event) => {
        const username = event.target.value;
        setUsername(username)
    }

    const _onAddUser = useCallback((event) => {
        event.preventDefault();
        addUser();
    }, [addUser])

    return (
        <div className="form-wrapper">
            <h1>Enter Username</h1>
            <form onSubmit={(event) => _onSubmit(event)}>
                <input className="input" type="text" placeholder="Username" onChange={(event) => {_onChange(event)}} required/>
                <input className="button" type="submit" value={userData.loading ? "Searching..." : "Search"} disabled={userData.loading}/>
                <input className="button" type="button" onClick={(event) => {_onAddUser(event)}} value="Add User"/>
            </form>
        </div>
    )
}

export default SearchBar
