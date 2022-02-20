import React from "react";
 const Profile = props => (
     <div>
         <section>Profile</section>
         <header>
             <h1>{props.user.name}</h1>
         </header>
         <div>
             <img src={props.user.image} alt={props.user.name} />
         </div>
         <p>
             Age: {props.user.age}
         </p>
     </div>
 )

export default Profile;