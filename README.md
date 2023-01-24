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

## 💻 Projeto

API em NodeJS para a criação e gerenciamento de Hábitos diarios.


## 🚀 Como Rodar

- Clone o projeto.
- Entre na pasta do projeto e rode npm install (pode usar yarn install de acordo com a sua configuração).
- configurar o banco de dados SQLite com o comando: npx prisma migrate dev. Para gerar dados mocados rodar: npx prisma db seed.

- npm run dev para rodar o projeto (localhost:3333).

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
    ]
}
```

- **`PATCH /habit/:id/toggle`**: Rota para marcar ou desmarca como finalizado um hábito


## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Esse projeto está sob a licença MIT.
