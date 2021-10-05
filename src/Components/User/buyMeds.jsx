import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { buyMedds, userEdit, userEditEntry } from '../../redux/action/user.action';
import Button from 'react-bootstrap/Button';


class buyMeds extends React.Component {
    constructor(props) {
        super(props)
        this.state = { med_name: this.props.dataToEdit.med_name?this.props.dataToEdit.med_name:"", qty: this.props.dataToEdit.units_sold?this.props.dataToEdit.units_sold:"", customer_id: this.props.dataToEdit.customer_id? this.props.dataToEdit.customer_id :"" }

    }

    updateData=()=>{
        
        this.props.editData(this.state)
        this.props.EditData({});
        this.props.history.push("/cartdisplay")

    }
    makeCart = () => {
        let { dataToEdit } = this.props
        if (dataToEdit.med_name) {
            var obj = { med_name: this.state.med_name, qty: this.state.qty, customer_id: this.state.customer_id }
            this.props.buymed(obj)
            console.log("Entry update done")
        }
        else {
            console.log("made cart");
            var obj = { med_name: this.state.med_name, qty: this.state.qty, customer_id: this.state.customer_id }
            this.props.buymed(obj);
        }
    }

    navigate = () => {
        this.props.history.push(`/usercartdisplay/${this.state.customer_id}`)
    }
    render() {
        let { dataToEdit } = this.props
        return (
            <div><br /><br />
                Enter medicine name:<input type="text" value={this.state.med_name} onChange={(event) =>  this.setState({ med_name: event.target.value }) } /><br />
                Enter medicine quantity:<input type="text" value={this.state.qty} onChange={(event) => { this.setState({ qty: event.target.value }) }} /><br />
                Enter customer_id:<input type="text" value={this.state.customer_id} onChange={(event) =>  this.setState({ customer_id: event.target.value }) } /><br />
                {dataToEdit.sno? <Button variant="warning" onClick={this.updateData}>Update</Button>:<div><Button variant="warning" onClick={this.makeCart}>Add to Cart</Button> <Button variant="success" onClick={this.navigate}>Go To MyCart</Button></div>}
               
            </div>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        buymed: bindActionCreators(buyMedds, dispatch),
        editData: bindActionCreators(userEdit, dispatch),
        EditData:bindActionCreators(userEditEntry, dispatch),

    }
}

const mapStateToProps = (state) => {
    return {
        dataToEdit: state.admin.dataToUpdate
    }
}


export default connect(mapStateToProps, mapDispatchtoProps)(buyMeds)