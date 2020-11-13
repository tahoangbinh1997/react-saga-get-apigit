import { connect } from 'react-redux';
import SearchBar from "../components/SearchBar";
import UserInformation from "../components/UserInformation";
import ListUser from "../components/ListUser";
import { fetchUser, addUser, delUser } from "../redux/actions/action";

const mapStateSearchBar = (state) => {
    return {
        userData: state.dataUser.user,
        username: state.dataUser.username
    }
};

const mapStateUserInformation = (state) => {
    return {
        userData: state.dataUser.user,
        username: state.dataUser.username,
        listUser: state.dataUser.listUser
    }
};

const mapStateListUser = (state) => {
    return {
        listUser: state.dataUser.listUser
    }
};

const mapDispatchSearchBar = {
    fetchUser,
    addUser
};

const mapDispatchListUser = {
    delUser
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    SearchBar: connect(mapStateSearchBar, mapDispatchSearchBar)(SearchBar),
    UserInformation: connect(mapStateUserInformation, null)(UserInformation),
    ListUser: connect(mapStateListUser, mapDispatchListUser)(ListUser)
}
