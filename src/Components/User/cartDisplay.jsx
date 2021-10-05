import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { cartDisplay, userDeleteEntry, userEditEntry } from "../../redux/action/user.action";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'


class CartDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = { med_name: "", customer_id: "" }

    }

    userEdit = (id) => {
        this.data = this.props.cartData[id];
        console.log("edit working");
        this.props.editData(this.data);
        this.props.history.push('/medicineSale')

    }

    userdelete = (mname) => {
       
        var obj = { med_name: mname, customer_id: this.state.customer_id }
        this.props.deleteData(obj);
        this.props.getCartData({ customer_id: this.state.customer_id });

    }



    disCart = () => {
        console.log("Function Working");
        var obj = { customer_id: this.state.customer_id }
        this.props.getCartData(obj);

    }

    render() {
        let { cartData } = this.props;
        console.log("User Cart Data=>", cartData)
        return (

            <>
            <br /><br />
                Enter your customer_id:<input type="text" onChange={(event) => { this.setState({ customer_id: event.target.value }) }} /> <br />
                
                <Button variant="outline-success"  onClick={this.disCart}>View MyCart</Button><br />
                Contents of my Cart<br />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Medicine_name</th>
                            <th>Quantity</th>
                            <th>Unit_Price</th>
                            <th>Purchase_date</th>
                            <th>Amount</th>
                            <th colSpan="2">Alter Cart</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartData.map((res, key) => (
                                <tr>
                                    <td>{res.sno}</td>
                                    <td>{res.med_name}</td>
                                    <td>{res.units_sold}</td>
                                    <td>{res.unit_price}</td>
                                    <td>{res.sale_date}</td>
                                    <td>{res.Net_amount}</td>
                                    <td> <Button variant="outline-info"  onClick={()=>{this.userEdit(key)}}>Edit</Button></td>
                                    <td><Button variant="outline-danger"  onClick={() => { this.userdelete(res.med_name) }}>Delete</Button></td>
                                    
                                   
                                </tr>
                            )
                            )
                        }

                    </tbody>
                </Table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { cartData: state.admin.table }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCartData: bindActionCreators(cartDisplay, dispatch),
        deleteData: bindActionCreators(userDeleteEntry, dispatch),
        editData: bindActionCreators(userEditEntry, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartDisplay);