

export default function Calories({ label, quantity, unit }) {
    return (
        <div className="calories">
           <div className="label">{label}: <span>{quantity} {unit} </span></div>
         
        </div>
        
       
    )
}