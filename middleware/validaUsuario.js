
const validaUsuario = (req, res, next) => {
    const { nome, email, telefone } = req.body;

    if (!nome || typeof nome != 'string' || !/^[A-Za-zÀ-ÖØ-öø-ÿÇç'´`^~\- ]{2,}$/.test(nome)) {
        return res.status(400).json({ error: 'Nome inválido' });
    };

    if (!email || typeof email != 'string' || !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/.test(email)) {
        return res.status(400).json({ error: 'Email inválido' })
    };

    if (!telefone || typeof telefone != 'string' || !/^\(\d{2}\) \d{5}-\d{4}$/.test(telefone)) {
        return res.status(400).json({ error: 'Número de telefone inválido' });
    };

    next();
}

export default validaUsuario;