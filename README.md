## Projeto React: Lista de Tarefas com memo, useEffect e Portal

Este projeto é um exemplo simples de uma lista de tarefas que demonstra os conceitos de:

- `React.memo` para evitar re-renderizações desnecessárias.
- `useEffect` para efeitos colaterais (como simular carregamento de dados).
- Atualização imutável de estado.
- Uso de **Portal** para exibir um modal fora da árvore DOM principal.

---

## Passo a Passo para Executar o Projeto

### 1. Pré-requisitos

- Node.js instalado (recomendado: versão 18+)
- npm ou yarn

---

### 2. Criar o projeto com Vite (recomendado)

Abra o terminal e execute:

```bash
npm create vite@latest minha-lista-react -- --template react
cd minha-lista-react
```

### 3. Instalar dependências

~~~bash
npm install
~~~

### 5. Iniciar o servidor de desenvolvimento
~~~bash
npm run dev
~~~

### 6. Acessar no navegador
- Abra http://localhost:5173 no seu navegador.
- Você verá a lista de tarefas com:
- Botão para adicionar tarefas
- Componente memoizado (TaskItem)
- Modal com portal (TaskModal)
- useEffect simulando carregamento de tarefa inicial

### Estrutura dos Arquivos
```bash
src/
??? App.jsx         `Componente principal com lógica da aplicação`
??? index.css       `estilização`
??? index.html      `HTML principal com root e modal-root`
??? main.jsx        `renderiza o <App /> no DOM.`
??? TaskItem.jsx    `Componente individual de tarefa (memoizado)`
??? TaskModal.jsx   `Modal com detalhes da tarefa (usa portal)`
``` 

### o que é feito em cada arquivo
- **App.jsx**
  Contém a lógica principal da aplicação:
  - Armazena as tarefas com `useState`
  - Adiciona novas tarefas de forma imutável
  - Usa `useEffect` para simular carregamento inicial
  - Renderiza a lista de tarefas e o modal quando uma tarefa é selecionada

- **TaskItem.jsx**
  Componente individual de tarefa:
  - Usa `React.memo` para evitar re-renderizações quando as `props` não mudam
  - Mostra o texto da tarefa e chama `onClick` ao ser clicado

- **TaskModal.jsx**
  Modal que aparece com detalhes da tarefa:
  - Usa `ReactDOM.createPortal` para renderizar fora da árvore principal
  - Mostra o nome da tarefa e um botão de fechar

- **index.html**
  HTML base usado pelo Vite:
  - Contém duas divs: `#root` para a aplicaçãp e `#modal-root` para o Portal do modal
