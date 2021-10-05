import React from "react";
import { bindActionCreators } from "redux";
import {  getRemStock } from "../../redux/action/user.action";
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table'



class ViewRemStocks extends React.Component {
    constructor(props) {
        super(props);
        this.props.getRemData();

    }
    render() {
        let { remData } = this.props,id=0;
        console.log("Remaining Stocks Info=>", remData)
        return (
            <>
            <br /><br />
            <h2>Pharmacy remaining stock Inventory</h2>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Medicine_name</th>
                            <th>Stocks</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            remData.map(res => (
                                <tr>
                                     <td>{++id}</td>
                                    <td>{res.med_name}</td>
                                    <td>{res.stocks}</td>
                                    
                                    
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
    return { remData: state.admin.table }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRemData: bindActionCreators(getRemStock, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewRemStocks)