import './Widget.css';

const Widget = () => {
    return(
        <div className="widget">
            <button className = "widget-button" aria-label = "Ver carrito">  
                <span className ="badge">0</span>
            </button>
        </div>
    )
}

export default Widget;