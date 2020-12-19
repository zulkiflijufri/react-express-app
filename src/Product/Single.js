import Axios from "axios";
import React from "react";
import { useParams, useHistory } from "react-router-dom";

export default function Single() {
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = React.useState({
        name: "",
        price: 0,
        stock: 1,
        status: true,
    });

    React.useEffect(() => {
        Axios.get(`http://localhost:3000/product/${id}`)
            .then((res) => {
                const { status, message, data } = res.data;
                if (status === "success") {
                    setProduct(data);
                } else {
                    alert(message);
                }
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <div>
            <h2>Single product page</h2>
            {product && (
                <div>
                    <div>Name: {product.name}</div>
                    <div>Price: {product.price}</div>
                    <div>Stock: {product.stock}</div>
                    <div>Status: {product ? "on" : "off"}</div>
                </div>
            )}
            <button onClick={() => history.push("/product")}>Back</button>
        </div>
    );
}
