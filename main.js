import Producto from './modules/product.js';
import Inventario from './modules/inventary.js';
import Interfaz from './modules/interface.js';

//const inventario = new Inventario();
const interfaz = new Interfaz()

const addProd = document.querySelector('#addProd');
const btnListFirst = document.querySelector('#addfirst');
const btnDelFirst = document.querySelector('#delfirst');
const delProd = document.querySelector('#delProd')

var producto;
var inventario;

addProd.addEventListener('click', () => {
    console.clear()
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value
    const cantidad = document.getElementById('cantidad').value
    const costo = Number(document.getElementById('costo').value);

    if (inventario === undefined || inventario.inicio ===null){
        producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario = new Inventario();
        inventario.addProduct(producto)

    } else {
        var aux = new Producto(codigo, nombre, descripcion, cantidad, costo);
        producto.siguiente=aux
        inventario.addProduct(producto,aux)
        producto=aux;
    }
    console.log(inventario)
})

btnListFirst.addEventListener('click', () =>{
    console.clear()
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value
    const cantidad = document.getElementById('cantidad').value
    const costo = Number(document.getElementById('costo').value);

    if (inventario === undefined || inventario.inicio ===null){
        producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario.addFirst(producto)
    } else {
        var producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario.addFirst(producto)
    }
    console.log(inventario)
})

btnDelFirst.addEventListener('click', () =>{
    console.clear()
    
    inventario.delFirst()
    console.log(inventario)
})

delProd.addEventListener('click', () => {
    console.clear()

    const codigo = document.getElementById('codeDel').value;
    let code = new Producto(codigo, '', '', '', '');
    inventario.delProd(code.codigo)

    console.log(inventario)
})




