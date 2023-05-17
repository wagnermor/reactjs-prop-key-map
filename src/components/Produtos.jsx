export function Produtos({ name, image, price }) {
  return (
    <li>
      <h2>{name}</h2>
      <img src={image} />
      <h3>{price}</h3>
    </li>
  )
}
