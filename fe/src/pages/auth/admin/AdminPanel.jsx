import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

function AdminPanel() {
    const [products, setproducts] = useState([]);
    const { token } = useContext(AuthContext);
    useEffect(() => {
      getAllproducts();
    }, []);
  
    async function getAllproducts() {
      const res = await fetch("http://localhost:3000/users", {
        headers: { Authorization: token },
      });
      const data = await res.json();
      setproducts(data);
    }
    
  return (
<>
<section>
<h1>Admin Page</h1>
      <div>
        {products.map((x) => {
          return (
            <>
              <li>Email : {x.email}</li>
              <li>Password : {x.password}</li>
            </>
          );
        })}
      </div>
</section>
</>
  )
}

export default AdminPanel
