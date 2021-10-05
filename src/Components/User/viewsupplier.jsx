import React from "react";
import { bindActionCreators } from "redux";
import {  getsupplier } from "../../redux/action/user.action";
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table'



class ViewSupplier extends React.Component {
    constructor(props) {
        super(props);
        this.props.getSupplierData();

    }
    render() {
        let { supplierData } = this.props;
        console.log("supplier Data=>", supplierData)
        return (
            <>
            <br /><br />
            <h2>Pharmacy supplier Inventory</h2>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Supplier_id</th>
                            <th>Supplier_name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            supplierData.map(res => (
                                <tr>
                                    <td>{res.supplier_id}</td>
                                    <td>{res.supplier_name}</td>
                                    
                                    
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
    return { supplierData: state.admin.table }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSupplierData: bindActionCreators(getsupplier, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewSupplier)