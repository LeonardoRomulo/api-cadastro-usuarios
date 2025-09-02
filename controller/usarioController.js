import conexao from "../model/conexao";
import usuario from "../model/usuario";

class usuarioController {
    static async criarUsuario(req,res){
        try{
            const {nome, email, telefone} = req.body;
            
            //verificando se há usuários duplicados na tabela
            const queryVerifica = 'SELECT * FROM usuarios WHERE nome = ? or email = ? or telefone =?';
            const [usuariosExistentes] = await conexao.query(queryVerifica, [nome, email, telefone]);
            if (usuariosExistentes.length > 0){
                return res.status(409).json({error: 'Usuário já cadastrado'});
            }

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