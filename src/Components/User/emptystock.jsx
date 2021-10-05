import React from "react";
import { bindActionCreators } from "redux";
import { getEmpStock } from "../../redux/action/user.action";
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table'


class ViewEmpty extends React.Component {
    constructor(props) {
        super(props);
        this.props.getempstockData();

    }
    render() {
        let { emptyData } = this.props, id=0;
        console.log("Empty stocks Data=>", emptyData)
        return (
            <>
            <br /><br />
            <h2>Pharmacy 0 Stock Inventory</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Medicine Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            emptyData.map(res => (
                                <tr>
                                    <td>{++id}</td>
                                    <td>{res.med_name}</td>
                                    
                                    
                                </tr>

                            ))

                        }
                    </tbody>
                </Table>
            </>

        )
    }

}

const mapStateToProps = (state) => {
    return { emptyData: state.admin.table }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getempstockData: bindActionCreators(getEmpStock, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewEmpty)