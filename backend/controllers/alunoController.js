const Aluno = require('../models/Aluno');

exports.listar = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

exports.criar = async (req, res) => {
<<<<<<< HEAD
  const aluno = new Aluno(req.body);
  await aluno.save();
  res.status(201).json(aluno);
};

exports.atualizar = async (req, res) => {
  try {
    const aluno = await Aluno.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!aluno) {
      return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    res.json(aluno);
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro ao atualizar aluno', erro });
  }
};

exports.apagar = async (req, res) => {
  const aluno = await Aluno.findByIdAndDelete(req.params.id);
  if (!aluno) {
    return res.status(404).json({ mensagem: 'Aluno não encontrado' });
  }
  res.json({ mensagem: 'Aluno apagado com sucesso' });
};
=======
  const novo = new Aluno(req.body);
  await novo.save();
  res.status(201).json(novo);
};

exports.apagar = async (req, res) => {
  await Aluno.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
>>>>>>> 7bbfe3c9c6c78e4c9b474ad6fb1b7b892021d474
