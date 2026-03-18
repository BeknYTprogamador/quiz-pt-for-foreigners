# 📘 Teste de Português A1 – Documentação

## 1. Visão Geral
Este projeto é um **aplicativo de teste online** desenvolvido para estrangeiros que estão aprendendo português no **nível A1**.

Ele oferece **10 questões de múltipla escolha** com instruções em inglês e respostas em português. Após concluir o teste, os alunos recebem uma **pontuação** e uma **mensagem de avaliação**, como:
- *“Excelente! Você está pronto para o A2.”*
- *“Bom trabalho! Você precisa revisar um pouco seus conhecimentos.”*
- *“Acho que você precisa voltar ao básico.”*

O projeto foi desenvolvido usando **HTML, CSS e JavaScript**, com uma clara separação de responsabilidades:
- **HTML** → estrutura
- **CSS** → estilo
- **JavaScript** → lógica e geração dinâmica do teste

---
## 2. Estrutura do Projeto
```
/project-root
│── index.html # Estrutura da página principal
│── style.css # Estilo para layout e design
│── script.js # Lógica e avaliação do teste
```

---

## 3. Recursos
- ✅ **Geração dinâmica de questionários**: As perguntas são armazenadas em JavaScript e renderizadas automaticamente.
- ✅ **Formato de múltipla escolha**: Cada pergunta tem 3 respostas possíveis.

- ✅ **Sistema de pontuação**: Conta as respostas corretas.

- ✅ **Classificação**: Fornece mensagens de feedback com base no desempenho.

- ✅ **Design responsivo**: Funciona bem em desktops e dispositivos móveis.

---

## 4. Detalhes do arquivo

### `index.html`
- Define a estrutura da página.

- Contém:

- Título e cabeçalho.

- Contêiner do questionário (`<div id="quiz">`) onde as perguntas são inseridas dinamicamente.

- Botão para enviar as respostas.

- Área de exibição dos resultados.

### `style.css`
- Fornece estilos para:

- Layout da página (caixa do questionário centralizada).

- Tipografia e cores.

- Botões com efeitos de foco.

- Formatação da mensagem de resultado.

### `script.js`
- Contém o **array de perguntas** (10 objetos com texto, opções e índice da resposta correta).

- Funções:

- `loadQuiz()` → Gera dinamicamente o HTML para as perguntas e opções.

- `checkAnswers()` → Avalia as respostas selecionadas, calcula a pontuação e exibe a mensagem de classificação.

- Lógica de classificação:

- **100% de acertos** → “Excelente! Você está pronto para o A2.”

- **≥ 60% de acertos** → “Bom trabalho! Você precisa revisar um pouco os seus conhecimentos.”

- **< 60% de acertos** → “Acho que você precisa revisar o básico.”

---

## 5. Exemplo de Objeto de Pergunta
```javascript
{

text: "1. Como se diz 'Bom dia' em português?",

options: ["Boa noite", "Bom dia", "Olá"],

answer: 1
}
```
- `text`: A pergunta em inglês.

- `options`: Array de possíveis respostas em português.

- `answer`: Índice da opção correta (baseado em 0).

---

## 6. Como Executar
1. Coloque todos os arquivos (`index.html`, `style.css`, `script.js`) na mesma pasta.

2. Abra o arquivo `index.html` em qualquer navegador moderno.

3. Responda às perguntas e clique em **“Ver resultado”**.

4. Veja sua pontuação e classificação.