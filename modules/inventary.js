export default class Inventario {

    cosntructor(){
        this.inicio = null;
    }

    addProduct(producto, productoNuevo){
        if(this.inicio == null){
            this.inicio = producto;
        } else {
            producto.siguiente = productoNuevo
            //productoNuevo.anterior = producto;
        }
    }

    addFirst(producto){
        if(this.inicio === null){
            this.inicio = producto;
        } else {
            let gg = this.inicio;
            this.inicio = producto;
            producto.siguiente = gg;
        }
    }

    delProd(code){
        let gg = this.inicio;
        if(this.inicio.codigo === code){
            this.inicio = this.inicio.siguiente;
        } else {
            while(gg.siguiente.codigo != code){
                gg = gg.siguiente;
            }
    
            if (gg.siguiente.codigo === code){
                gg.siguiente = gg.siguiente.siguiente
            } 
        }
        
    }

    delFirst(){
        this.inicio = this.inicio.siguiente
    }


}