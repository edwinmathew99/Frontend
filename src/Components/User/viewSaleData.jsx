import React from "react";
import { bindActionCreators } from "redux";
import { getsoldmeds } from "../../redux/action/user.action";
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table'



class ViewSales extends React.Component {
    constructor(props) {
        super(props);
        this.props.getsaleData();

    }
    render() {
        let { saleData } = this.props, id=0;
        console.log("Sale Data=>", saleData)
        return (
            <div>
                <br /><br />
            <h2>Pharmacy  Sales Log</h2>
            <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Medicine Name</th>
                            <th>Units_sold</th>
                            <th>Sale_date</th>
                            <th>Customer_name</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            saleData.map(res => (
                                <tr>
                                    <td>{++id}</td>
                                    <td>{res.med_name}</td>
                                    <td>{res.units_sold}</td>
                                    <td>{res.sale_date}</td>
                                    <td>{res.customer_name}</td>
                                   
                                    
                                    
                                    
                                </tr>

                            ))

                        }
                    </tbody>
                </Table>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return { saleData: state.admin.table }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getsaleData: bindActionCreators(getsoldmeds, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewSales)