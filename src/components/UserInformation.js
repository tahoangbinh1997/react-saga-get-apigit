import React from 'react';

const UserInformation = ({userData}) => {
    const {data, loading, error} = userData;
    return (
        <>
            {loading && (<h3 className="loading">Searching... </h3>)}
            {error && (<h3 className="error">{error}</h3>)}
            {
                data && (
                    <div className="main">
                        <img src={data.avatar_url ? data.avatar_url : ''} alt="avatar"/>
                        <DataField
                            label="Github ID"
                            value={data.id ? data.id : ''}
                        />
                        <DataField
                            label="Github name"
                            value={data.name ? data.name : ''}
                        />
                        <DataField
                            label="Github URL"
                            value={data.html_url ? data.html_url : ''}
                            isURL
                        />
                    </div>
                )
            }
        </>
    )
}

const DataField = ({label, value, isURL}) => {
    return (
        <div className="data">
            <label>{label}: </label>
            {isURL ? (<a href={value}>{value}</a>) : (<span>{value || "no name"}</span>)}
        </div>
    )
}

export default UserInformation;
