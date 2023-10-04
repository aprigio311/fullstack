import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './form.css'

function Formulario() {
  // Definir estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [avaliacao, setAvaliacao] = useState('');
  const [comentList, setComentList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) =>{
      setComentList(response.data);
    });
  }, []);

    const submitReview = () => {
      Axios.post('http://localhost:3001/api/insert', {
        nome: nome,
        avaliacao: avaliacao,
       }).then( ()=>{
         alert("avaliacação enviada com sucesso!");
       });
    };

  return (
    
    <div className='formulario'>
      
      <h1>Deixe um comentário</h1>
      
      <form onSubmit={submitReview}>
      
        <div>

          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
        
        </div>
        
        <div>
        
          <label htmlFor="avaliacao">Avaliação:</label>
          <textarea id="avaliacao" value={avaliacao} onChange={(e) => setAvaliacao(e.target.value)} required/>
        
        </div>

        <button type="submit">Enviar</button>
      
      
      </form>

      <div className='coments'>
          {comentList.map((val)=>{
          return <div className='card-coment'>{val.nome} comentou: {val.avaliacao}</div>
          })}
      </div>

      
    </div>
  );
}

export default Formulario;