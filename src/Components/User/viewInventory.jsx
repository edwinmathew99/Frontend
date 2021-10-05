import React from "react";
import { bindActionCreators } from "redux";
import { getInventory } from "../../redux/action/user.action";
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table'


class ViewInvent extends React.Component {
    constructor(props) {
        super(props);
        this.props.getInventoryData();

    }
    render() {
        let { inventoryData=[] } = this.props;
        console.log("Inventory Data=>", inventoryData)
        return (
            <>
            <br /><br />
                <h2>Pharmacy Inventory</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Medicine_name</th>
                            <th>Invoice_Id</th>
                            <th>Expiry_date</th>
                            <th>Unit_Price</th>
                            <th>Stocks</th>
                            <th>Supplier_name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            inventoryData.map(res => (
                                <tr>
                                    <td>{res.sno}</td>
                                    <td>{res.med_name}</td>
                                    <td>{res.invoice_id}</td>
                                    <td>{res.expiry_date}</td>
                                    <td>{res.unit_price}</td>
                                    <td>{res.stocks}</td>
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
    return { inventoryData: state.admin.table }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInventoryData: bindActionCreators(getInventory, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewInvent)