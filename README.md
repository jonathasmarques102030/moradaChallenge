# API de Caixa Eletrônico em TypeScript

-- Esta API simula o funcionamento de um caixa eletrônico, calculando a menor quantidade de cédulas necessárias para um valor de saque dado. Utiliza TypeScript com Express.js para gerenciar as requisições HTTP.

## Instalação

-- Clone esse repositório:

```bash
git clone https://github.com/seu-usuario/api-caixa-eletronico-ts.git
cd api-caixa-eletronico-ts
npm install
```

### Para Executar: 

```bash
npm start
```

-- O servidor estará disponível em http://localhost:3000

### Endpoints

#### Saque

URL: /api/saque

Método: POST

Exemplo de Requisição:


```bash
{
  "valor": 380
}
```

Resposta: 

```bash
{
  "100": 3,
  "50": 1,
  "20": 1,
  "10": 1,
  "5": 0,
  "2": 0,
}
```

