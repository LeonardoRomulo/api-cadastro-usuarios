import conexao from "../model/conexao";
import usuario from "../model/usuario";

class usuarioController {
    static async criarUsuario(req,res){
        try{
            const {nome, email, telefone} = req.body;
            const usuario = new usuario(nome,email,telefone);
            const query = 'INSERT INTO usuarios (nome, email, telefone) VALUES(?, ?, ?)';
            await conexao.query(query, [usuario.nome, usuario.email, usuario.telefone]);
            return res.status(201).json({message:'Usuário criado com sucesso'});
        }catch(err){
            return res.status(500).json({error:err.message});
        }
    };

    static async listarUsuarios(req, res){
        try{
            const query = 'SELECT * FROM usuarios'
           const [resultado] = await conexao.query(query);
            return res.status(200).json(resultado);
        }catch(err){
            return res.status(500).json({error: err.message});
        }
    }
}

export default usuarioController;