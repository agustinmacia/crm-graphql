import React, { Component } from 'react'

class Paginador extends Component {
    state = {

    }
    render() {

        const {actual} = this.props;
        const botonAnterior = (actual>1) ? <button type="button" className="btn btn-success mr-2">&laquo; Anterior</button> : '';

        return (
            <div className="mt-5 d-flex justify-content-center">{botonAnterior}</div>
        );
    }
}

export default Paginador