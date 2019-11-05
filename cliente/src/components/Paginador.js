import React, { Component } from 'react'

class Paginador extends Component {
    state = {
        paginador: {
            paginas: Math.ceil(Number(this.props.getTotalClientes) / this.props.limite)
        }
    }
    render() {

        const {actual} = this.props;
        const botonAnterior = (actual>1) ? <button type="button" className="btn btn-success mr-2">&laquo; Anterior</button> : '';

        const {paginas} = this.state.paginador;
        const botonSiguiente = (actual !== paginas) ? <button type="button" className="btn btn-success">Siguiente &raquo;</button> : '';

        return (
            <div className="mt-5 d-flex justify-content-center">
            {botonAnterior}
            {botonSiguiente}
            </div>
        );
    }
}

export default Paginador