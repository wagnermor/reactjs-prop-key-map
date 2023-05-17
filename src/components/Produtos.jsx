import React from 'react'

export function Produtos() {
  return (
    <ul>
      <li>
        <h2>{produtos[0].nome}</h2>
        <img src={produtos[0].image} />
        <h3>{produtos[0].preco}</h3>
      </li>

      <li>
        <h2>{produtos[1].nome}</h2>
        <img src={produtos[1].image} />
        <h3>{produtos[1].preco}</h3>
      </li>

      <li>
        <h2>{produtos[2].nome}</h2>
        <img src={produtos[2].image} />
        <h3>{produtos[2].preco}</h3>
      </li>
    </ul>
  )
}
