import ProductCard from '../ProductCard/ProductCard';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const productos = [
    {
      id: 1,
      categoria: "Repuestos",
      titulo: "Módulo Display OLED Samsung",
      descripcion: "Repuesto calidad original con marco incluido y garantía de instalación.",
      precio: 45000,
      imagen: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?w=500&q=80"
    },
    {
      id: 2,
      categoria: "Accesorios",
      titulo: "Cargador Rápido 35W USB-C",
      descripcion: "Carga súper rápida compatible con múltiples dispositivos. Incluye cable reforzado.",
      precio: 18500,
      imagen: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80"
    },
    {
      id: 3,
      categoria: "Accesorios",
      titulo: "Auriculares Bluetooth In-Ear",
      descripcion: "Estuche de carga magnético, cancelación pasiva de ruido y 24hs de autonomía.",
      precio: 24000,
      imagen: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80"
    }
  ];

  return (
    <section className="catalog-section">
      <h2 className="catalog-title">{greeting}</h2>
      
      <div className="products-grid">
        {productos.map((prod) => (
          <ProductCard 
            key={prod.id}
            categoria={prod.categoria}
            titulo={prod.titulo}
            descripcion={prod.descripcion}
            precio={prod.precio}
            imagen={prod.imagen}
          />
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;