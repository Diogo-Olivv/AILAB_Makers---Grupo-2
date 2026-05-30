## Épico 1: Autenticação e Controle de Acesso

### US 1.1: Cadastro de Pacientes

**Descrição:** Como paciente, quero me cadastrar na plataforma informando meus dados pessoais para ter acesso aos meus prontuários médicos.

**Critérios de Aceitação:**
- Validar os dados de entrada no backend.
- Rejeitar e-mails já cadastrados no banco de dados.
- Aplicar hash na senha (bcrypt) antes de salvar.
- Não retornar a senha ou hash na resposta da API.
- Exibir mensagem de sucesso ou erro na interface.

### US 1.2: Cadastro de Médicos

**Descrição:** Como médico, quero me cadastrar na plataforma informando meus dados e CRM para gerenciar os exames dos meus pacientes.

**Critérios de Aceitação:**
- Validar os dados de entrada e o formato do CRM no backend.
- Rejeitar e-mails ou CRMs já cadastrados.
- Aplicar hash na senha (bcrypt) antes de salvar.
- Não retornar a senha ou hash na resposta da API.
- Exibir mensagem de sucesso ou erro na interface.

### US 1.3: Login de Usuário

**Descrição:** Como usuário, quero fazer login com e-mail e senha para acessar o sistema de forma segura.

**Critérios de Aceitação:**
- Validar credenciais comparando a senha informada com o hash armazenado no banco de dados.
- Gerar e retornar um token JWT em caso de autenticação bem-sucedida.
- Retornar erro 401 (Unauthorized) para credenciais inválidas.
- Armazenar o token no frontend de forma segura.
- Registrar evento `LOGIN_SUCCESS` contendo usuário e timestamp em caso de sucesso.
- Registrar evento `LOGIN_FAILURE` contendo usuário (quando identificável) e timestamp em caso de falha.

### US 1.4: Controle de Acesso às Rotas Protegidas

**Descrição:** Como usuário da plataforma, quero que o sistema valide minhas permissões em rotas protegidas para garantir a privacidade dos meus dados médicos.

**Critérios de Aceitação:**
- Rejeitar requisições sem token válido com erro 401 (Unauthorized).
- Garantir que pacientes acessem apenas seus próprios exames e prontuários.
- Garantir que médicos visualizem apenas exames e prontuários de pacientes vinculados.
- Bloquear tentativas de acesso não autorizado com erro 403 (Forbidden).
- Registrar evento `ACCESS_DENIED` contendo usuário e timestamp em log.

### US 1.5: Encerramento de Sessão (Logout)

**Descrição:** Como usuário, quero fazer logout para encerrar minha sessão e proteger meus dados em dispositivos compartilhados.

**Critérios de Aceitação:**
- Remover o token JWT do armazenamento do frontend.
- Limpar o estado de autenticação da interface.
- Redirecionar o usuário imediatamente para a tela de login.
- Registrar evento `LOGOUT` contendo usuário e timestamp em log.