export default function ShopItem({item}) {
  return (
    <div className="goods-container">
      <img className="goods-img" src={item.img}></img>
      <h4 className="goods-name">{item.name}</h4>
      <span className="goods-color">{item.color}</span>
      <span className="goods-price">{'$' + item.price}</span>
      <button className="goods-add">ADD TO CARD</button>
   </div>
  )
}