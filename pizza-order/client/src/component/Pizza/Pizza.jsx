import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Product.module.sass";

class Pizza extends React.Component {
  
 update(price, id){
   
  
   this.props.change(price, id)
   
 }
    
  render(){
    
    return (
      <div className={s.oneProduct}>
        {this.props.pizza.map((p) => {
          let pricee = p.variableProduct[2].price;
          
          const handleChange = (event) =>{
          
            const value = event.target.value;
            const id = event.target.id;
            pricee = p.variableProduct.find(item => item.size == value).price
            
            this.update(pricee, id);
          }
          return (
            <div className={s.product}>
              <div>
                <NavLink to={`/pizza/${p._id}`}>
                  <img src={p.img} />
                </NavLink>
              </div>
              <div className={s.productItem}>
                <NavLink to={`/pizza/${p._id}`} className={s.name}>
                  <h3>{p.name}</h3>
                </NavLink>
                <ul>
                  {p.composition.map((c) => {
                    return (
                      <div>
                        <li>{c}</li>
                      </div>
                    );
                  })}
                </ul>
                <form action="#" >
                  <div className="select-box">
                    <label for="select-box1" className="label select-box1">
                      <div className="label-desc">Размер</div>{" "}
                      <select id={p._id} className="select" onChange={handleChange} >
                        <option selected value="35" >
                          {p.variableProduct[2].size} см
                        </option>
                        <option value="30" >
                          {p.variableProduct[1].size} см
                        </option>
                        <option value="25" >
                          {p.variableProduct[0].size} см
                        </option>
                      </select>
                    </label>
                  </div>
                </form>
                <h3>Цена {pricee} ₴</h3>
                <NavLink to={"#"} activeClassName={s.submit} className={s.but}>
                  Заказать
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

// const Pizza = (props) => {

// const handleSubmit = () =>{

// }
//   return (
//     <div className={s.oneProduct}>
//       {props.pizza.map((p) => {
//         return (
//           <div className={s.product}>
//             <div>
//               <NavLink to={`/pizza/${p._id}`}>
//                 <img src={p.img} />
//               </NavLink>
//             </div>
//             <div className={s.productItem}>
//               <NavLink to={`/pizza/${p._id}`} className={s.name}>
//                 <h3>{p.name}</h3>
//               </NavLink>
//               <ul>
//                 {p.composition.map((c) => {
//                   return (
//                     <div>
//                       <li>{c}</li>
//                     </div>
//                   );
//                 })}
//               </ul>
//               <form action="#" onSubmit={handleSubmit}>
//                 <div class="select-box">
//                   <label for="select-box1" class="label select-box1">
//                     <div class="label-desc">Размер</div>{" "}
//                     <select id="select-box1" class="select">
//                       <option selected value="35" type="submit">
//                         {p.variableProduct[2].size} см
//                       </option>
//                       <option value="30" type="submit">
//                         {p.variableProduct[1].size} см
//                       </option>
//                       <option value="35" type="submit">
//                         {p.variableProduct[0].size} см
//                       </option>
//                     </select>
//                   </label>
//                 </div>
//               </form>
//               <h3>Цена {p.variableProduct[2].price} ₴</h3>
//               <NavLink to={"#"} activeClassName={s.submit} className={s.but}>
//                 Заказать
//               </NavLink>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default Pizza;
