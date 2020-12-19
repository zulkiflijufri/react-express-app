import Axios from "axios";
import React from "react";

export default function List() {
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        Axios.get("http://localhost:3000/products")
            .then((res) => {
                const { status, message, data } = res.data;

                if (status === "success") {
                    setProducts(data);
                } else {
                    alert(message);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h2>List product {products.length}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        products.map((product, i) => {
                            return (
                                <tr key={i}>
                                    <td className="center">
                                        <a
                                            href={`/product/single/${product._id}`}
                                        >
                                            {product.name}
                                        </a>
                                    </td>
                                    <td className="center">{product.price}</td>
                                    <td className="center">{product.stock}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}
