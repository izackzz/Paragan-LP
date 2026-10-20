# Operação mensal — 9 indicadores

> Dados fictícios de um gateway sobre a Paragan. Os valores fecham exatamente neste exemplo; não são resultados reais nem preços oficiais.

**Lucro operacional do mês: R$ 505.646,66, antes de impostos.**

A operação recebeu R$ 1.217.712,51 em tarifas e gastou R$ 712.065,85 para funcionar. A diferença é o lucro operacional.

| Indicador | Valor |
| --- | --- |
| **Lucro operacional — o que sobrou antes dos impostos** | **R$ 505.646,66** |
| Receita da operação — tarifas cobradas dos sellers | R$ 1.217.712,51 |
| Custo total para manter a operação funcionando | R$ 712.065,85 |
| Pagamentos a terceiros — parte do custo total | R$ 548.317,29 |
| Adquirência e processamento PIX — parte dos pagamentos a terceiros | R$ 438.624,83 |
| Valor das vendas movimentadas pelos sellers — GMV bruto | R$ 47.863.219,47 |
| Vendas aprovadas | 193.847 |
| Taxa de aprovação | 96,18% — 193.847 vendas aprovadas em 201.538 tentativas |
| Cobrança dos sellers — modelo híbrido | 2,37% sobre o valor de cada venda aprovada + R$ 0,43 fixos por aprovação |

**Como a conta fecha:**

- Receita: R$ 47.863.219,47 × 2,37% + 193.847 × R$ 0,43 = **R$ 1.217.712,51**.
- Custo total: R$ 548.317,29 de terceiros + R$ 163.748,56 de equipe e despesas internas = **R$ 712.065,85**.
- **Lucro operacional: R$ 1.217.712,51 − R$ 712.065,85 = R$ 505.646,66.**

O GMV é o dinheiro das vendas dos sellers, não a receita do gateway. O custo de adquirência já está dentro dos pagamentos a terceiros: não deve ser descontado novamente. O lucro apresentado é operacional, antes de impostos e despesas financeiras; não é lucro líquido final.

## Exemplo de requisição — API white-label Sharkfy

Produto fictício: **Mochila Executiva Premium — R$ 297,99**. Exemplo para execução no servidor; `cardToken` é um token de cartão obtido previamente pelo SDK do provedor, nunca o número do cartão.

```javascript
await axios.post("https://api.sharkfy.com.br/v1/seller/payments", {
  amount: 29799,
  currency: "BRL",
  description: "Mochila Executiva Premium",
  payment_method: {
    type: "card",
    token: cardToken
  },
  installments: 1,
  metadata: {
    product: "Mochila Executiva Premium",
    order: "SF-20261020-001"
  }
}, {
  headers: {
    "X-API-Key": process.env.SHARKFY_SECRET_KEY,
    "Idempotency-Key": "pedido-demo-20261020-001"
  }
});
```

Valores em centavos. O exemplo pressupõe `api.sharkfy.com.br` configurado e verificado como domínio personalizado da API; o domínio identifica o gateway, sem header de tenant. A chave do seller deve ter permissão `payments:write` e nunca aparecer na ilustração ou no navegador. Usar uma chave de idempotência por pedido, mantendo a mesma nas tentativas desse pedido.
