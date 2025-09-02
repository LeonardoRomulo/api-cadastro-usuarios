import { Router } from 'express';
import usuarioController from '../controller/usarioController.js';
import validaUsuario from '../middleware/validaUsuario.js';

const router = Router();

router.post('/usuarios', validaUsuario, usuarioController.criarUsuario)
router.get('/usuarios', usuarioController.listarUsuarios);

export default router;