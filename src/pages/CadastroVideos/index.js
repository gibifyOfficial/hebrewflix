import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../components/PageDefault';

function CadastroVideos() {
    return (
        <PageDefault >
            <h1>Cadastro de Videos</h1>

            <Link to="/cadastro-categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideos;