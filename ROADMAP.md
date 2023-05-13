## Roadmap

### Phase 1 - Scaffold
- [x] Configurar linguagem e ambiente
- [x] Configurar DB
- [x] Configurar ORM
- [x] Configurar API
- [ ] Configurar testes
- [ ] Configurar docker (kubernets?)

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

https://app.uff.br/riuff/bitstream/handle/1/13023/TCC_DANIEL_BARBOSA_PEREIRA.pdf?sequence=1&isAllowed=y
Pensando como o aluno@net:
- o aluno acessa a plataforma e:
    - tem uma tela de avisos inicialmente
    - pode selecionar o período letivo
    - pode consultar boletim de notas e faltas
        - aparece uma lista com as matérias do período, as notas, se lançadas e as faltas por matéria
        - quando eu clico em uma nota, consigo ver como ela foi composta (o professor lança a nota e o tipo (prova, trabalho...))
            - nessa tela eu tenho um descritivo do aluno, curso, turma, disciplina e a fórmula da média
