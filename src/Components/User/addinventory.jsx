import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { addInventory } from '../../redux/action/user.action';
import Button from 'react-bootstrap/Button';
import {InputGroup,FormControl} from 'react-bootstrap';

class AddInvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { sno: "", med_id: "", med_name: "", invoice_id: "", med_type: "", expiry_date: "", stocks: "", supplier_id: "", price: "" }

    }

    makeInventory = () => {
        console.log("made cart");
        var obj = { sno: this.state.sno, med_id: this.state.med_id, med_name: this.state.med_name, invoice_id: this.state.invoice_id, med_type: this.state.med_type, expiry_date: this.state.expiry_date, stocks: this.state.stocks, supplier_id: this.state.supplier_id, price: this.state.price }
        this.props.addInv(obj);
        <div>Entry to pharmacy inventory successfull</div>

    }
    render() {
        return (
            <div><br /><br />
                Enter S.No:<input type="text" onChange={(event) => { this.setState({ sno: event.target.value }) }} /><br />
                Enter medicine id:<input type="text" onChange={(event) => { this.setState({ med_id: event.target.value }) }} /><br />
                Enter medicine type:<input type="text" onChange={(event) => { this.setState({ med_type: event.target.value }) }} /><br />
                Enter medicine name:<input type="text" onChange={(event) => { this.setState({ med_name: event.target.value }) }} /><br />
                Enter invoice_id:<input type="text" onChange={(event) => { this.setState({ invoice_id: event.target.value }) }} /><br />
                Enter expiry_date:<input type="text" onChange={(event) => { this.setState({ expiry_date: event.target.value }) }} /><br />
                Enter stocks:<input type="text" onChange={(event) => { this.setState({ stocks: event.target.value }) }} /><br />
                Enter supplier_id:<input type="text" onChange={(event) => { this.setState({ supplier_id: event.target.value }) }} /><br />
                Enter price:<input type="text" onChange={(event) => { this.setState({ price: event.target.value }) }} /><br />
                
                <Button variant="success" onClick={this.makeInventory} >Add to Pharmacy</Button>{' '}
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        addInv: bindActionCreators(addInventory, dispatch)
    }
}
export default connect(null, mapDispatchtoProps)(AddInvent)