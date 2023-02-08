<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
  </p>

<br>

## NLW Setup - Habit

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nodejs](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [SQLite](https://www.sqlite.org/index.html)
- [Prisma](https://www.prisma.io/docs)

## 💻 Projeto

API em NodeJS para a criação e gerenciamento de Hábitos diarios.


## 🚀 Como Rodar

- Clone o projeto.
- Entre na pasta do projeto e rode npm install (pode usar yarn install de acordo com a sua configuração).
- criar arquivo .env com DATABASE_URL="".
- configurar o banco de dados SQLite com o comando: npx prisma migrate dev. Para gerar dados mocados rodar: npx prisma db seed.

- npm run dev para rodar o projeto (localhost:3333).

Frontend do projeto:

- [Web](https://github.com/jamangueira7/app-habitos-react-nlw-setup)
- [Mobile](https://github.com/jamangueira7/app-habitos-react-native-nlw-setup)

## 👩🏿‍💻 Rotas

- **`POST /habits`**: Rota de criação de hábitos

Enviar:
```
{
    "title": "Exemplo de hábito",
    "weekDays": [0, 2, 5]
}
```

- **`GET /day?date=2023-01-16T03:00:00.000z`**: Rota para retornar habitos por dia

Retorna:
```
{
    "possibleHabits": [
        {
            "id": "0730ffac-d039-4194-9571-01aa2aa0efbd",
            "title": "Beber 2L água",
            "created_at": "2022-12-31T06:00:00.000Z"
        },
        {
            "id": "fa1a1bcf-3d87-4626-8c0d-d7fd1255ac00",
            "title": "Dormir 8h",
            "created_at": "2023-01-08T06:00:00.000Z"
        }
    ],
    "completedHabits": []
}
```

- **`PATCH /habit/:id/toggle`**: Rota para marcar ou desmarca como finalizado um hábito

- **`GET /summary`**: Rota para retornar um resumo dos habitos.

```
[
    {
        "id": "3b3f4272-b37c-4e9e-8ee7-65346f659dc3",
        "date": "2023-01-02T03:00:00.000Z",
        "completed": 1
    },
    {
        "id": "14694a3b-81c4-421d-a4c1-ac9f0cbf24f1",
        "date": "2023-01-06T03:00:00.000Z",
        "completed": 1
    },
    {
        "id": "6b704a24-91de-4329-9246-660f89e10edd",
        "date": "2023-01-04T03:00:00.000Z",
        "completed": 2
    },
    {
        "id": "e2cbb639-a904-4a40-b133-0db40e76e1d7",
        "date": "2023-01-24T03:00:00.000Z",
        "completed": 2
    }
]
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.
