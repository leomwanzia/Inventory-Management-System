import { Form, Button, Table} from "react-bootstrap"
import { useState, createRef, useEffect } from "react";
import axios from "axios";


export default function AddProduct() { 

let initialValue = [];
const [products, setProduct] = useState(initialValue);
const formData = createRef();
const increIndex = createRef();
const addProduct = (event) =>{
event.preventDefault();

const newProduct = {
    product_name: formData.current.product_name.value,
    price: formData.current.price.value,
    quantity: Number(formData.current.quantity.value)
}

//add new product inside array

setProduct([...products, newProduct]);
}

//add the quantity by 1
const increQuantity = (event)=>{
    const indexOfArray = event.target.value;
    products[indexOfArray].quantity = products[indexOfArray].quantity + 1;
    setProduct([...products])
}
//substract the quantity by 1
const decreQuantity = (event)=>{
    const indexOfArray = event.target.value;
    products[indexOfArray].quantity = products[indexOfArray].quantity - 1;
    setProduct([...products])
}

    return (
    <div> 
        <Form onSubmit={addProduct} ref={formData}>
            <Form.Group controlId="formBasicProductName">
                    <Form.Label>Product Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" name="product_name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="text" placeholder="Price in KSH" name="price"/>
            </Form.Group>

            <Form.Group controlId="formBasicQuantity">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type="number" placeholder="How many: quantity" name="quantity"/>
            </Form.Group>

            <Button className="add" variant="primary" type="submit">Add Inventory</Button>

        </Form>

        <Button className="view" variant="primary" type="submit">View Inventory</Button>

    <Table striped bordered hover variant="dark">
        <thead>
            <tr>
                <th>Index</th>
                <th>Product Name:</th>
                <th>Price:</th>
                <th>Quantity:</th>
                <th>Option</th>
            </tr>
        </thead>

            <tbody>

                {
                    products.map((item, index)=>{
                        return(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.product_name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>
                            <Button variant="success" onClick={event=>increQuantity(event)} ref={increIndex} value={index} >+</Button>{' '}
                            <Button variant="danger" onClick={event=>decreQuantity(event)} value={index}>-</Button>{' '}
                            </td>
                        </tr>
                        )
                    })
                }

            </tbody>
        </Table>

    </div>
    )
}
