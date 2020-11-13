import { connect } from 'react-redux';
import { getData } from '../redux/actions/action';
import GetData from '../components/GetData';

const mapStateToProps = (state) => {
    return {
        apiData: state.data
    }
};

const mapDispatchToProps = {
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(GetData)
