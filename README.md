<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>

<br>

## Party Time

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nodejs](https://nodejs.org/en/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [MongoDB](https://www.mongodb.com/)

## 💻 Projeto

API em NodeJS para a criação e gerenciamento de festas.

Evento do Ignite Lab na plataforma da [Matheus Battisti - Hora de Codar](https://www.youtube.com/watch?v=anMK76I2dUA)

## 🚀 Como Rodar

- Clone o projeto.
- Entre na pasta do projeto e rode npm install (pode usar yarn install de acordo com a sua configuração).
- configura o banco de dados MongoDB no arquivo conn.js.

- npm run start:dev para rodar o projeto (localhost:3000).

## 👩🏿‍💻 Rotas

- **`POST /service`**: Rota de criação de serviços

Enviar:
```
{
    "name": "Algum serviço",
    "description": "Alguma descrição",
    "price": 1400,
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE"
}
```
Retorna:
```
{
    "response": {
        "name": "Algum serviço",
        "description": "Alguma descrição",
        "price": 1400,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "_id": "63c6ae5990389e49bedc99b2",
        "createdAt": "2023-01-17T14:19:05.542Z",
        "updatedAt": "2023-01-17T14:19:05.542Z",
        "__v": 0
    },
    "msg": "Serviço criado com sucesso!"
}
```

- **`GET /service`**: Rota para retornar todos os serviços

Retorna:
```
[
    {
        "_id": "63c6ae5990389e49bedc99b2",
        "name": "Algum serviço",
        "description": "Alguma descrição",
        "price": 1400,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "createdAt": "2023-01-17T14:19:05.542Z",
        "updatedAt": "2023-01-17T14:19:05.542Z",
        "__v": 0
    },
    {
        "_id": "63c6af60dd75624b889f3ea7",
        "name": "Algum serviço 2",
        "description": "Alguma descrição 2",
        "price": 750,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "createdAt": "2023-01-17T14:23:28.994Z",
        "updatedAt": "2023-01-17T14:23:28.994Z",
        "__v": 0
    }
]
```

- **`GET /service/:id`**: Rota para retornar um serviço

Retorna:
```
{
    "_id": "63c6ae5990389e49bedc99b2",
    "name": "Algum serviço",
    "description": "Alguma descrição",
    "price": 1400,
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
    "createdAt": "2023-01-17T14:19:05.542Z",
    "updatedAt": "2023-01-17T14:19:05.542Z",
    "__v": 0
}
```

- **`DELETE /service/:id`**: Rota para deletar um serviço

Retorna:
```
{
    "response": {
        "name": "Algum serviço",
        "description": "Alguma descrição",
        "price": 1400,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "_id": "63c6ae5990389e49bedc99b2",
        "createdAt": "2023-01-17T14:19:05.542Z",
        "updatedAt": "2023-01-17T14:19:05.542Z",
        "__v": 0
    },
    "msg": "Serviço excluído com sucesso!"
}
```

- **`PUT /service/:id`**: Rota de atualização de serviço

Enviar:
```
{
    "name": "Algum serviço 2 atualizado",
    "description": "Alguma descrição 2",
    "price": 750,
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE"
}
```
Retorna:
```
{
    "service": {
        "name": "Algum serviço 2 atualizado",
        "description": "Alguma descrição 2",
        "price": 750,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE"
    },
    "msg": "Serviço atualizado com sucesso!"
}
```


- **`POST /parties`**: Rota de criação de festas (SEM SERVIÇO)

Enviar:
```
{
    "title": "Meu evento",
    "author": "João",
    "description": "Festa do João",
    "budget": 6000,
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE"
}
```
Retorna:
```
{
    "response": {
        "title": "Meu evento",
        "author": "João",
        "description": "Festa do João",
        "budget": 6000,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "services": [],
        "_id": "63c6b8b5467a0a4a9235fd70",
        "createdAt": "2023-01-17T15:03:17.954Z",
        "updatedAt": "2023-01-17T15:03:17.954Z",
        "__v": 0
    },
    "msg": "Festa criada com sucesso!"
}
```

- **`POST /parties`**: Rota de criação de festas (COM SERVIÇO)

Enviar:
```
{
    "title": "Meu evento",
    "author": "João",
    "description": "Festa do João",
    "budget": 6000,
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
    "services": [
        {
            "name": "Algum serviço 4",
            "description": "Alguma descrição 4",
            "price": 3500,
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE"
        },
        {
            "name": "Algum serviço 5",
            "description": "Alguma descrição 5",
            "price": 1500,
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE"
        }
    ]
}
```

Retorna:
```
{
    "response": {
        "title": "Meu evento",
        "author": "João",
        "description": "Festa do João",
        "budget": 6000,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "services": [
            {
                "name": "Algum serviço 4",
                "description": "Alguma descrição 4",
                "price": 3500,
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
                "_id": "63c6b971467a0a4a9235fd73",
                "createdAt": "2023-01-17T15:06:25.324Z",
                "updatedAt": "2023-01-17T15:06:25.324Z"
            },
            {
                "name": "Algum serviço 5",
                "description": "Alguma descrição 5",
                "price": 1500,
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
                "_id": "63c6b971467a0a4a9235fd74",
                "createdAt": "2023-01-17T15:06:25.324Z",
                "updatedAt": "2023-01-17T15:06:25.324Z"
            }
        ],
        "_id": "63c6b971467a0a4a9235fd72",
        "createdAt": "2023-01-17T15:06:25.325Z",
        "updatedAt": "2023-01-17T15:06:25.325Z",
        "__v": 0
    },
    "msg": "Festa criada com sucesso!"
}
```

- **`GET /parties`**: Rota para retornar todas as festas

Retorna:
```
[
    {
        "_id": "63c6b8b5467a0a4a9235fd70",
        "title": "Meu evento",
        "author": "João",
        "description": "Festa do João",
        "budget": 6000,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "services": [],
        "createdAt": "2023-01-17T15:03:17.954Z",
        "updatedAt": "2023-01-17T15:03:17.954Z",
        "__v": 0
    },
    {
        "_id": "63c6b971467a0a4a9235fd72",
        "title": "Meu evento",
        "author": "João",
        "description": "Festa do João",
        "budget": 6000,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "services": [
            {
                "name": "Algum serviço 4",
                "description": "Alguma descrição 4",
                "price": 3500,
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
                "_id": "63c6b971467a0a4a9235fd73",
                "createdAt": "2023-01-17T15:06:25.324Z",
                "updatedAt": "2023-01-17T15:06:25.324Z"
            },
            {
                "name": "Algum serviço 5",
                "description": "Alguma descrição 5",
                "price": 1500,
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
                "_id": "63c6b971467a0a4a9235fd74",
                "createdAt": "2023-01-17T15:06:25.324Z",
                "updatedAt": "2023-01-17T15:06:25.324Z"
            }
        ],
        "createdAt": "2023-01-17T15:06:25.325Z",
        "updatedAt": "2023-01-17T15:06:25.325Z",
        "__v": 0
    }
]
```

- **`GET /parties/:id`**: Rota para retornar uma festa

Retorna:
```
{
    "_id": "63c6b8b5467a0a4a9235fd70",
    "title": "Meu evento",
    "author": "João",
    "description": "Festa do João",
    "budget": 6000,
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
    "services": [],
    "createdAt": "2023-01-17T15:03:17.954Z",
    "updatedAt": "2023-01-17T15:03:17.954Z",
    "__v": 0
}
```

- **`DELETE /parties/:id`**: Rota para deletar uma festa

Retorna:
```
{
    "deletedParty": {
        "_id": "63c6b8b5467a0a4a9235fd70",
        "title": "Meu evento",
        "author": "João",
        "description": "Festa do João",
        "budget": 6000,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "services": [],
        "createdAt": "2023-01-17T15:03:17.954Z",
        "updatedAt": "2023-01-17T15:03:17.954Z",
        "__v": 0
    },
    "msg": "Festa excluída com sucesso!"
}
```

- **`PUT /parties/:id`**: Rota de atualização de festas

Enviar:
```
 {
        "_id": "63c6b971467a0a4a9235fd72",
        "title": "Meu evento atualizado",
        "author": "João",
        "description": "Festa do João",
        "budget": 6000,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "services": [
            {
                "name": "Algum serviço 4",
                "description": "Alguma descrição 4",
                "price": 3500,
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
                "_id": "63c6b971467a0a4a9235fd73",
                "createdAt": "2023-01-17T15:06:25.324Z",
                "updatedAt": "2023-01-17T15:06:25.324Z"
            },
            {
                "name": "Algum serviço 5",
                "description": "Alguma descrição 5",
                "price": 1500,
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
                "_id": "63c6b971467a0a4a9235fd74",
                "createdAt": "2023-01-17T15:06:25.324Z",
                "updatedAt": "2023-01-17T15:06:25.324Z"
            }
        ]
    }
```

Receber:
```
{
    "party": {
        "title": "Meu evento atualizado",
        "author": "João",
        "description": "Festa do João",
        "budget": 6000,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
        "services": [
            {
                "name": "Algum serviço 4",
                "description": "Alguma descrição 4",
                "price": 3500,
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
                "_id": "63c6b971467a0a4a9235fd73",
                "createdAt": "2023-01-17T15:06:25.324Z",
                "updatedAt": "2023-01-17T15:06:25.324Z"
            },
            {
                "name": "Algum serviço 5",
                "description": "Alguma descrição 5",
                "price": 1500,
                "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ufmt.br%2Focs%2Findex.php%3Foption%3Dcom_phocagallery%26view%3Ddetail%26catid%3D1%3Agaleria-de-imagens-01%26id%3D3%3Aimagem-3-titulo-com-ate-45-caracteres%26tmpl%3Dcomponent%26Itemid%3D145%26lang%3Dpt-br&psig=AOvVaw2Roew2MRHFkoBHhbEmbiMt&ust=1674051508034000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIjf5_3lzvwCFQAAAAAdAAAAABAE",
                "_id": "63c6b971467a0a4a9235fd74",
                "createdAt": "2023-01-17T15:06:25.324Z",
                "updatedAt": "2023-01-17T15:06:25.324Z"
            }
        ]
    },
    "msg": "Festa atualizada com sucesso!"
}
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.
