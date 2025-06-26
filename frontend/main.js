// JS para operações CRUD com Fetch API
<<<<<<< HEAD
const apiUrl = 'https://trab1-restapi-diogoneto04.onrender.com/alunos';
=======
const apiUrl = 'https://trab1-restapi-diogoneto04.onrender.com/alunos'; // Muda para Render mais tarde
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474

const lista = document.getElementById('lista-alunos');
const form = document.getElementById('form-aluno');

<<<<<<< HEAD
let alunoEmEdicao = null; // null = modo adicionar | _id = modo edição
=======
let alunoEmEdicao = null; // null = modo adicionar | id = modo edição
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474

function carregarAlunos() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(alunos => {
      lista.innerHTML = '';
      alunos.forEach(aluno => {
        const li = document.createElement('li');
        li.textContent = `${aluno.nome} ${aluno.apelido} (${aluno.curso}, Ano ${aluno.anoCurricular}) `;

        // Botão Apagar
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'Apagar';
<<<<<<< HEAD
        botaoApagar.classList.add('btn', 'btn-danger');
        botaoApagar.addEventListener('click', () => apagarAluno(aluno._id));
=======
        botaoApagar.addEventListener('click', () => apagarAluno(aluno.id));
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474
        li.appendChild(botaoApagar);

        // Botão Editar
        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
<<<<<<< HEAD
        botaoEditar.classList.add('btn', 'btn-success', 'ms-2');
=======
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474
        botaoEditar.addEventListener('click', () => carregarParaEdicao(aluno));
        li.appendChild(botaoEditar);

        lista.appendChild(li);
      });
    })
    .catch(erro => {
      console.error('Erro ao carregar alunos:', erro);
    });
}

function apagarAluno(id) {
  fetch(`${apiUrl}/${id}`, { method: 'DELETE' })
    .then(() => carregarAlunos())
    .catch(erro => {
      console.error('Erro ao apagar aluno:', erro);
    });
}

function carregarParaEdicao(aluno) {
  document.getElementById('nome').value = aluno.nome;
  document.getElementById('apelido').value = aluno.apelido;
  document.getElementById('curso').value = aluno.curso;
  document.getElementById('anoCurricular').value = aluno.anoCurricular;
<<<<<<< HEAD
  alunoEmEdicao = aluno._id;
=======
  alunoEmEdicao = aluno.id;
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474

  form.querySelector('button').textContent = 'Guardar Alterações';
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const alunoData = {
    nome: document.getElementById('nome').value.trim(),
    apelido: document.getElementById('apelido').value.trim(),
    curso: document.getElementById('curso').value.trim(),
    anoCurricular: parseInt(document.getElementById('anoCurricular').value)
  };

<<<<<<< HEAD
  // Validação rápida
  if (!alunoData.nome || !alunoData.apelido || !alunoData.curso || isNaN(alunoData.anoCurricular)) {
    alert('Por favor, preencha todos os campos corretamente.');
    return;
  }

=======
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474
  if (alunoEmEdicao) {
    // Atualizar aluno existente
    fetch(`${apiUrl}/${alunoEmEdicao}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alunoData)
    })
<<<<<<< HEAD
      .then(res => {
        if (!res.ok) throw new Error('Erro ao atualizar aluno.');
=======
      .then(() => {
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474
        alunoEmEdicao = null;
        form.querySelector('button').textContent = 'Adicionar Aluno';
        form.reset();
        carregarAlunos();
      })
      .catch(erro => {
        console.error('Erro ao editar aluno:', erro);
<<<<<<< HEAD
        alert('Erro ao editar aluno.');
=======
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474
      });
  } else {
    // Criar novo aluno
    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alunoData)
    })
<<<<<<< HEAD
      .then(res => {
        if (!res.ok) throw new Error('Erro ao adicionar aluno.');
=======
      .then(() => {
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474
        form.reset();
        carregarAlunos();
      })
      .catch(erro => {
        console.error('Erro ao adicionar aluno:', erro);
<<<<<<< HEAD
        alert('Erro ao adicionar aluno.');
=======
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474
      });
  }
});

// Carregamento inicial
carregarAlunos();
