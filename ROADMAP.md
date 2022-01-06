## Roadmap

### Phase 1 - Scaffold
- [ ] Configurar linguagem e ambiente
- [ ] Configurar DB
- [ ] Configurar ORM
- [ ] Configurar API
- [ ] Configurar testes

### Phase 2 - MVP
- [ ] Configurar linting e estilo de código
- [ ] Configurar infra com terraform
    - [ ] aplicação
    - [ ] banco de dados
- [ ] Configurar logging do server
- [ ] Regra de negócio do core
    - [ ] Criação de usuário
    - [ ] Autenticação
    - [ ] ...

### Phase 3 - Improvements

### Features
- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

Aluno
- Lista com as materias
- Lista com as notas
- Lista de presença por materia
- Situação financeira

Professor
- Lista de materias
- Lista de turmas
- Lançar notas
- Fazer chamada

Materia
Nota
Aluno
Professor
Turma

Professor -> Materia
Turma -> Alunos
Alunos -> Notas

Professor acessa a plataforma, seleciona a materia, visualiza os alunos, lança presença, lança nota
Aluno acessa a plataforma, seleciona a materia, visualiza nota, visualiza presença
