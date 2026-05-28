# Como adicionar uma nova rota

## 1. Abrir App.jsx

Localize o arquivo:

```text
src/App.jsx
```

---

## 2. Importar a página

Exemplo:

```jsx
import NovaPagina from "./pages/NovaPagina";
```

---

## 3. Adicionar a rota

```jsx
<Route
  path="/novapagina"
  element={<NovaPagina />}
/>
```

---

## 4. Salvar o projeto

A nova rota estará disponível no navegador.
