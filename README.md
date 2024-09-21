## Tunes Library

Bem-vindo ao projeto **Tunes Library**! Este é um repositório que serve como uma biblioteca de músicas, permitindo que os usuários explorem e gerenciem suas coleções de forma eficiente.

## Instruções para Iniciar o Projeto

Siga os passos abaixo para configurar e iniciar o projeto em sua máquina local.

### Passo 1: Instalar Dependências

Execute o seguinte comando para instalar as dependências necessárias:

```bash
npm install
```

### Passo 2: Instalar Dependências do Front-end e Back-end

Para instalar todas as dependências do front-end e do back-end, execute:

```bash
npm run install:all
```

### Passo 3: Configurar o Banco de Dados

Carregue todos os dados e configurações necessários para o banco de dados com o comando:

```bash
npm run db:start
```

**Para configurar o acesso ao banco de dados**, basta acessar o caminho:

```
back-end/config/config.json
```

E alterar os seguintes valores:

```json
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "tune_library",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "tune_library",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "tune_library",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### Passo 4: Iniciar o Servidor

Para iniciar o projeto, você precisará abrir dois terminais.

#### Terminal 1: Iniciar o Back-end

No primeiro terminal, execute:

```bash
npm run start:backend
```

#### Terminal 2: Iniciar o Front-end

No segundo terminal, execute:

```bash
npm run start:frontend
```

## Observação

Caso precise reiniciar o banco de dados para as configurações padrão, utilize o seguinte comando:

```bash
npm run db:start
``` 

Com estas instruções, você estará pronto para explorar e gerenciar sua biblioteca de músicas usando o Tunes Library!

Citations:
[1] https://discussions.apple.com/thread/251139533
[2] https://support.apple.com/guide/itunes/use-multiple-itunes-libraries-itns3259/windows
[3] https://discussions.apple.com/thread/2687077
[4] https://support.apple.com/guide/itunes/move-your-itunes-library-to-another-computer-itns3230/windows
[5] https://support.apple.com/en-ke/guide/itunes/itns2999/windows
[6] https://support.apple.com/guide/music/use-multiple-libraries-mus7663a920a/mac
[7] https://support.apple.com/guide/itunes/from-a-shared-library-itns3018/windows
[8] https://support.apple.com/en-gb/guide/music/musa3dd5209/mac
