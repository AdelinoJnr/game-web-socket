import server from './index';

const { PORT = 3333 } = process.env;
server.listen(PORT, () => console.log(`Online na porta ${PORT}`));