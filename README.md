# 🍽️ Sabor Universitário

O **Sabor Universitário** é um sistema de gestão e benefícios alimentares projetado para integrar instituições de ensino, empresas parceiras, funcionários e clientes (estudantes/professores) em uma única plataforma prática e eficiente.

---

## 👥 Perfis do Sistema

O sistema é dividido em 4 níveis de acesso independentes, cada um com suas respectivas funcionalidades:

### 🏢 1. Instituição (Admin)
*   **Acesso:** Controlado e inserido manualmente via banco de dados/painel administrativo.
*   **Função:** Gerencia as regras gerais do sistema, valida o vínculo de estudantes/professores e monitora o uso dos benefícios dentro do ecossistema universitário.

### 💼 2. Empresa (Restaurantes/Parceiros)
*   **Função:** Gerencia o cardápio, recebe e processa os pedidos, controla as vendas e valida os vouchers de benefícios gerados pelos clientes.

### 👨‍💼 3. Funcionário (Operacional)
*   **Função:** Atua na ponta do atendimento das empresas parceiras. Realiza a leitura de QR Codes, validação de segurança dos pedidos e atualiza o status de entrega para o cliente final.

### 🎓 4. Cliente (Alunos/Professores/Comunidade)
*   **Função:** O usuário final da aplicação. Pode visualizar cardápios, comprar refeições, gerenciar seus saldos de benefícios e gerar cupons/QR Codes para retirada de alimentos.

---

## 🛠️ Tecnologias Utilizadas

*   **Frontend:** [React.js](https://react.dev/) + [Vite](https://vitejs.dev/) (Interface rápida, moderna e SPA)
*   **Estilização:** Tailwind CSS
*   **Banco de Dados & Autenticação:** [Supabase](https://supabase.com/) (PostgreSQL + Auth nativo)
*   **Controle de Versão:** Git & GitHub

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina o [Node.js](https://nodejs.org/) e o Git.

### Passo a Passo

1. **Clone o repositório:**
   
   git clone [https://github.com/Luiza-Vieira/SaborUniversitario.git](https://github.com/Luiza-Vieira/SaborUniversitario.git)
   cd SaborUniversitario
   npm install
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anon_do_supabase
   npm run dev
   
