function ProductCard({name, price, image}){
    return(
        <div style={{
            boader: '1px solid #ccc',
            padding: '15px',
            borderRadius:'12px',
            width: '280px',
            margin: '10px',
            textAlign:'center',
            boxShadow:'0 2px 6px rgba(0,0,0,0.1)',
            backgroundColor: '#fff'
        }}>
            <img src={image} alt={name} style={{width: '100%', borderRadius: '8px'}} />
            <h3>{name}</h3>
            <p style={{color:'darked',fontWeight: 'bold'}}>NT${price}</p>
        </div>
    );
}
export default ProductCard;