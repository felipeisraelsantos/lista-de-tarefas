## Projeto React: Lista de Tarefas com memo, useEffect e Portal

Este projeto � um exemplo simples de uma lista de tarefas que demonstra os conceitos de:

- `React.memo` para evitar re-renderiza��es desnecess�rias.
- `useEffect` para efeitos colaterais (como simular carregamento de dados).
- Atualiza��o imut�vel de estado.
- Uso de **Portal** para exibir um modal fora da �rvore DOM principal.

---

## Passo a Passo para Executar o Projeto

### 1. Pr�-requisitos

- Node.js instalado (recomendado: vers�o 18+)
- npm ou yarn

---

### 2. Criar o projeto com Vite (recomendado)

Abra o terminal e execute:

```bash
npm create vite@latest minha-lista-react -- --template react
cd minha-lista-react
```

### 3. Instalar depend�ncias

~~~bash
npm install
~~~

### 5. Iniciar o servidor de desenvolvimento
~~~bash
npm run dev
~~~

### 6. Acessar no navegador
- Abra http://localhost:5173 no seu navegador.
- Voc� ver� a lista de tarefas com:
- Bot�o para adicionar tarefas
- Componente memoizado (TaskItem)
- Modal com portal (TaskModal)
- useEffect simulando carregamento de tarefa inicial

### Estrutura dos Arquivos
```bash
src/
??? App.jsx         `Componente principal com l�gica da aplica��o`
??? index.css       `estiliza��o`
??? index.html      `HTML principal com root e modal-root`
??? main.jsx        `renderiza o <App /> no DOM.`
??? TaskItem.jsx    `Componente individual de tarefa (memoizado)`
??? TaskModal.jsx   `Modal com detalhes da tarefa (usa portal)`
``` 

### o que � feito em cada arquivo
- **App.jsx**
  Cont�m a l�gica principal da aplica��o:
  - Armazena as tarefas com `useState`
  - Adiciona novas tarefas de forma imut�vel
  - Usa `useEffect` para simular carregamento inicial
  - Renderiza a lista de tarefas e o modal quando uma tarefa � selecionada

- **TaskItem.jsx**
  Componente individual de tarefa:
  - Usa `React.memo` para evitar re-renderiza��es quando as `props` n�o mudam
  - Mostra o texto da tarefa e chama `onClick` ao ser clicado

- **TaskModal.jsx**
  Modal que aparece com detalhes da tarefa:
  - Usa `ReactDOM.createPortal` para renderizar fora da �rvore principal
  - Mostra o nome da tarefa e um bot�o de fechar

- **index.html**
  HTML base usado pelo Vite:
  - Cont�m duas divs: `#root` para a aplica��p e `#modal-root` para o Portal do modal
