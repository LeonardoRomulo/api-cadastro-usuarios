import { Router } from 'express';
import usuarioController from '../controller/usarioController';
import validaUsuario from '../middleware/validaUsuario';

const router = Router();

router.post('/usuarios', validaUsuario, usuarioController.criarUsuario)
router.get('/usuarios', usuarioController.listarUsuarios);

export default router;