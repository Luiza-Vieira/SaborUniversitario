import './TabTipoPagamentoPix.css'
import { useState } from "react";
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

function TabTipoPagamentoPix() {
    const [chaves, setChaves] = useState([
        { id: 1, tipo: 'CPF', valor: '128.704.787-61', ativo: true },
        { id: 2, tipo: 'Email', valor: 'alicealencar@gmail.com', ativo: true }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [editando, setEditando] = useState(null);
    const [tipoSelecionado, setTipoSelecionado] = useState('CPF');
    const [valorChave, setValorChave] = useState('');

    const tiposChave = ['CPF', 'CNPJ', 'Email', 'Telefone', 'Chave Aleatória'];

    const handleAbrirModal = (chave = null) => {
        if (chave) {
            setEditando(chave);
            setTipoSelecionado(chave.tipo);
            setValorChave(chave.valor);
        } else {
            setEditando(null);
            setTipoSelecionado('CPF');
            setValorChave('');
        }
        setShowModal(true);
    };

    const handleFecharModal = () => {
        setShowModal(false);
        setEditando(null);
        setTipoSelecionado('CPF');
        setValorChave('');
    };

    const handleSalvarChave = () => {
        if (!valorChave.trim()) {
            alert('Por favor, preencha a chave PIX');
            return;
        }

        if (editando) {
            setChaves(chaves.map(c => 
                c.id === editando.id 
                    ? { ...c, tipo: tipoSelecionado, valor: valorChave }
                    : c
            ));
        } else {
            const novaChave = {
                id: Date.now(),
                tipo: tipoSelecionado,
                valor: valorChave,
                ativo: true
            };
            setChaves([...chaves, novaChave]);
        }

        handleFecharModal();
    };

    const handleDeleteChave = (id) => {
        if (window.confirm('Tem certeza que deseja deletar esta chave?')) {
            setChaves(chaves.filter(c => c.id !== id));
        }
    };

    const getIconoTipo = (tipo) => {
        switch(tipo) {
            case 'CPF':
                return '🆔';
            case 'CNPJ':
                return '🏢';
            case 'Email':
                return '✉️';
            case 'Telefone':
                return '📱';
            case 'Chave Aleatória':
                return '🔑';
            default:
                return '💳';
        }
    };

    return (
        <div className="tab-content-pix">
            <div className="chaves-section">
                <h3 className="chaves-titulo">Chaves cadastradas</h3>

                <div className="chaves-lista">
                    {chaves.length > 0 ? (
                        chaves.map((chave) => (
                            <div key={chave.id} className="chave-item">
                                <div className="chave-icone">
                                    {getIconoTipo(chave.tipo)}
                                </div>
                                <div className="chave-info">
                                    <span className="chave-tipo">{chave.tipo}</span>
                                    <span className="chave-valor">{chave.valor}</span>
                                </div>
                                <div className="chave-acoes">
                                    <button 
                                        className="btn-editar"
                                        onClick={() => handleAbrirModal(chave)}
                                        title="Editar"
                                    >
                                        <FiEdit2 size={16} />
                                    </button>
                                    <button 
                                        className="btn-deletar"
                                        onClick={() => handleDeleteChave(chave.id)}
                                        title="Deletar"
                                    >
                                        <FiTrash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="chaves-vazio">
                            <p>Nenhuma chave PIX cadastrada</p>
                        </div>
                    )}
                </div>

                <button 
                    className="btn-cadastrar"
                    onClick={() => handleAbrirModal()}
                >
                    <FiPlus size={18} />
                    Cadastrar nova chave
                </button>
            </div>

            {/* MODAL */}
            {showModal && (
                <div className="modal-overlay" onClick={handleFecharModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{editando ? 'Editar Chave PIX' : 'Cadastrar Nova Chave PIX'}</h3>
                            <button className="modal-close" onClick={handleFecharModal}>✕</button>
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <label>Tipo de Chave</label>
                                <select 
                                    value={tipoSelecionado}
                                    onChange={(e) => setTipoSelecionado(e.target.value)}
                                >
                                    {tiposChave.map(tipo => (
                                        <option key={tipo} value={tipo}>{tipo}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Valor da Chave</label>
                                <input 
                                    type="text"
                                    value={valorChave}
                                    onChange={(e) => setValorChave(e.target.value)}
                                    placeholder={`Digite a chave ${tipoSelecionado}`}
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn-cancelar" onClick={handleFecharModal}>
                                Cancelar
                            </button>
                            <button className="btn-salvar" onClick={handleSalvarChave}>
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TabTipoPagamentoPix;


