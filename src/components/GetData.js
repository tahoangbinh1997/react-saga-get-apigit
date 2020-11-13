import React, { useEffect } from 'react';

const GetData = ({apiData, getData}) => {
    useEffect(() => {
        getData();
    }, [getData]);
    return (
        <div>
            {
                apiData.data ?
                    apiData.data.map((item) => (
                        <div key={item.id}>{item.name}</div>
                    ))
                    :
                    null
            }
            {apiData.loading ? <div>loading...</div> : null}
            {apiData.error !== null ? <div>{apiData.error}</div> : null}
        </div>
    )
}

export default GetData;
