import axios from 'axios';
export const GET_INVENTORY = "GET_INVENTORY";
export const EDIT_INVENTORY = "EDIT_INVENTORY";



export const getInventory = () => {
    return (dispatch) => {
        fetch('http://localhost:3600/pharmacy/inventory', {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'

        }).then(response => response.json()).then(data => dispatch({
            type: GET_INVENTORY,
            payload: data
        }))
    }
}



export const getmedDetails = () => {
    return (dispatch) => {
        fetch('http://localhost:3600/pharmacy/meddetails', {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'

        }).then(response => response.json()).then(data => dispatch({
            type: GET_INVENTORY,
            payload: data
        }))
    }
}

export const getsoldmeds = () => {
    return (dispatch) => {
        fetch('http://localhost:3600/pharmacy/soldmeds', {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'

        }).then(response => response.json()).then(data => dispatch({
            type: GET_INVENTORY,
            payload: data
        }))
    }
}

export const getsupplier = () => {
    return (dispatch) => {
        fetch('http://localhost:3600/pharmacy/supplier', {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'

        }).then(response => response.json()).then(data => dispatch({
            type: GET_INVENTORY,
            payload: data
        }))
    }
}

export const getEmpStock = () => {
    return (dispatch) => {
        fetch('http://localhost:3600/pharmacy/emptymeds', {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'

        }).then(response => response.json()).then(data => dispatch({
            type: GET_INVENTORY,
            payload: data
        }))
    }
}

export const getRemStock = () => {
    return (dispatch) => {
        fetch('http://localhost:3600/pharmacy/remstocks', {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'

        }).then(response => response.json()).then(data => dispatch({
            type: GET_INVENTORY,
            payload: data
        }))
    }
}


export const buyMedds = (data) => {


    return (dispatch) => {
        console.log("testing api to console=>", data)
        var url = `http://localhost:3600/pharmacy/useradd`
        axios.post(url, data).then(response => console.log(response));
    }
}

export const addInventory = (data) => {


    return (dispatch) => {
        console.log("testing", data)
        var url = `http://localhost:3600/pharmacy/inventory`
        axios.post(url, data).then(response => console.log(response));
    }
}

export const cartDisplay = (data) => {

    return (dispatch) => {
        var url = `http://localhost:3600/pharmacy/usercartdisplay/${data.customer_id}`
        fetch(url, {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET'

        }).then(response => response.json()).then(data => dispatch({
            type: GET_INVENTORY,
            payload: data
        }))
    }

}

export const userEdit = (data) => {
    return (dispatch) => {
        var url = `http://localhost:3600/pharmacy/usercartupdate`
        fetch(url, {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body:JSON.stringify(data) 
        }).then(response => response.json()).then(data => console.log(data))
    }


}
export const userEditEntry = (data) => {
    return {
        type: EDIT_INVENTORY,
        payload: data

    }
}

export const userDeleteEntry = (data) => {
    return (dispatch) => {
        var url = `http://localhost:3600/pharmacy/userdelete/${data.customer_id}/${data.med_name}`
        fetch(url, {
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'DELETE'

        }).then(response => response.json()).then(response => console.log(response))
    }

}