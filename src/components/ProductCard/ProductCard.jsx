import './ProductCard.css';

const ProductCard = ({ categoria, titulo, descripcion, precio, imagen }) => {
  return (
    <article className="product-card">
      
      <div className="product-header">
        <div className="product-image-box">
          <img src={imagen} alt={titulo} className="product-image" />
        </div>
      </div>

      
      <div className="product-body">
        <span className="product-category">{categoria}</span>
        <h3 className="product-title">{titulo}</h3>
        <p className="product-description">{descripcion}</p>

       
        <div className="product-footer">
          <span className="product-price">${precio}</span>
          <button className="btn-add-cart">Agregar al carrito</button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;