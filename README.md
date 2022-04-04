
# Blogs API📰

O `Blogs API` é um CRUD feito pra um site de notícias! 📰

## Objetivo
Nesse projeto, foi construído um back-end usando `ORM` com o pacote `sequelize` do `npm`, praticando as seguintes habilidades:
 - Criar e associar tabelas usando `models` do `sequelize`
 - Construir endpoints para consumir os models que criar 
 - Fazer um `CRUD` com o `ORM`

## Stack utilizada

`Node`, `Express`, `Sequelize`, `MySQL`


## Variáveis de Ambiente

Para rodar esse projeto na sua máquina, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`HOSTNAME`

`MYSQL_USER`

`MYSQL_PASSWORD`

`JWT_SECRET`

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:natanielsantos159/blogs-api.git
```

Entre no diretório do projeto

```bash
  cd blogs-api
```

Instale as dependências

```bash
  npm install
```





## Documentação da API

#### Posta um novo post

```http
  POST /post
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. O título do post  |
| `content` | `string` | **Obrigatório**. O conteúdo do post |
| `categoryIds` | `array` | **Obrigatório**. Um array de IDs de categorias |

####  Obter todos os posts

```http
  GET /post
```

- Esse endpoint deve listar todas os posts e retorná-los na seguinte estrutura:

```json
[
  {
    "id": 1,
    "title": "Post do Ano",
    "content": "Melhor post do ano",
    "userId": 1,
    "published": "2011-08-01T19:58:00.000Z",
    "updated": "2011-08-01T19:58:51.000Z",
    "user": {
      "id": 1,
      "displayName": "Lewis Hamilton",
      "email": "lewishamilton@gmail.com",
      "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2017_Malaysia.jpg"
    },
    "categories": [
      {
        "id": 1,
        "name": "Inovação"
      }
    ]
  }
]
```

####  Obter post pelo id

```http
  GET /post/:id
```
- Retorna um post com o `id` especificado. O retorno deve ter os seguinte formato:

```json
  {
  "id": 1,
  "title": "Post do Ano",
  "content": "Melhor post do ano",
  "userId": 1,
  "published": "2011-08-01T19:58:00.000Z",
  "updated": "2011-08-01T19:58:51.000Z",
  "user": {
    "id": 1,
    "displayName": "Lewis Hamilton",
    "email": "lewishamilton@gmail.com",
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg"
  },
  "categories": [
    {
      "id": 1,
      "name": "Inovação"
    }
  ]
}
```

####  Editar post pelo id

```http
  PUT /post/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `title` | `string` | **Opcional**. Novo titulo do post |
| `content` | `string` | **Opcional**. Novo conteúdo do post |


#### Cadastra um usuário

```http
  POST /user
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `displayName` | `string` | **Obrigatório**. O nome do usuário |
| `email` | `string` | **Obrigatório**. O email do usuário |
| `password` | `string` | **Obrigatório**. A senha do usuário, no mínimo 6 caracteres|
| `image` | `string` | **Opcional** A imagem do perfil|


#### Faz o login do usuário

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. O email do usuário  |
| `password` | `string` | **Obrigatório**. A senha do usuário |


####  Cadastra uma nova categoria

```http
  POST /categories
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O nome da categoria  |

####  Obter todas as categorias

```http
  GET /categories
```

- Esse endpoint deve listar todas as Categorias e retorná-las na seguinte estrutura:

```json
[
  {
    "id": 1,
    "name": "Escola"
  },
  {
    "id": 2,
    "name": "Inovação"
  }
]
```
## Feedback

Se você tiver algum feedback, por favor entre em contato por meio de nathan.santos159@hotmail.com

