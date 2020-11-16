import React, {useMemo} from 'react';

const ListUser = ({delUser, listUser}) => {
    let {data, error} = listUser;
    let thead = Array.from([]);
    let tbody = Array.from([]);

    useMemo(() => {
        const _onDeleteUser = (userId) => {
            delUser(userId)
        }
        //tạo 1 mảng object tableUser lấy dữ liệu từ việc map data của listUser.data và định nghĩa các trường được phép hiển thị
        let tableUser = Array.from([]);
        tableUser = data.map((item) => ({
            id: item.id,
            login: item.login,
            avatar_url: item.avatar_url,
            html_url: item.html_url,
            type: item.type,
            public_repos: item.public_repos,
            followers: item.followers,
            following: item.following
        }));
        if (data && data.length !== 0) {
            Object.keys(tableUser[0]).forEach((item, index) => {
                if (index > 0) {
                    thead.push(<td key={index}>{item}</td>)
                }
            })
            thead.push(<td key={Object.keys(tableUser[0]).length}>Action</td>);
            for (const [index, value] of tableUser.entries()) {
                tbody.push(
                    <tr key={index}>
                        <td>{value.login}</td>
                        <td><img src={value.avatar_url} alt=""/></td>
                        <td><a href={value.html_url}>{value.html_url}</a></td>
                        <td>{value.type}</td>
                        <td>{value.public_repos}</td>
                        <td>{value.followers}</td>
                        <td>{value.following}</td>
                        <td><input type="button" onClick={() => _onDeleteUser(value.id)} value="Delete"/></td>
                    </tr>
                )
            }
        }
    }, [data, thead, tbody, delUser])
    return (
        <>
            {error && (<h3 className="error">{error}</h3>)}
            <table>
                <thead>
                <tr>
                    {thead}
                </tr>
                </thead>
                <tbody>
                {tbody}
                </tbody>
            </table>
        </>
        // <div>
        //     <h1>Hello World</h1>
        // </div>
    )
}

export default ListUser;
