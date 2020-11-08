export default class Inventario {

    constructor(){
        this.inicio = null;
    }

    addProduct(producto, productoNuevo){
        if(this.inicio == null){
            this.inicio = producto;
        } else {
            let aux  = this.inicio;
            while(aux.siguiente != null){
                aux= aux.siguiente;
            }
            aux.siguiente = productoNuevo;
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


    searchProd(code){
        let gg = this.inicio
        while (gg.codigo != code){
            gg = gg.siguiente;
        }
        if (gg.codigo === code){
            return gg.nombre;
        }
    }

    changePos(newProd, pos){
        let gg = this.inicio;
        if(pos === 1){
            this.addFirst(newProd);
        } else {
            let aux = 1;
            while ((aux + 1) != pos){
                if (gg.siguiente != null){
                    gg = gg.siguiente
                    aux++;
                } else {
                    alert('Esa posicion no existe');
                    break;
                }
            }
            
            if ((aux+1) === pos){
                newProd.siguiente = gg.siguiente;
                gg.siguiente = newProd;
            }
        }
    }

    listProds(){
        let concat = "";
        let gg = this.inicio
        while (gg != null){
            concat += `
            <p>Codigo:${gg.codigo}\n</p>
            <p>Nombre:${gg.nombre}\n</p>
            <p>Descripcion:${gg.descripcion}\n</p>
            <p>Cantidad:${gg.cantidad}\n</p>
            <p>Costo:${gg.costo}\n</p> \n
            <p>Total: ${gg.cantidad * gg.costo}</p>
            <p>------------------------------</p>`
            gg = gg.siguiente
        }
        return concat
    }

    listProdsInverse(){
        let gg = this.inicio
        let aux = 1;
        while(gg.siguiente != null){
            gg= gg.siguiente
            aux++;
        }
        let concat = `
        <p>Codigo:${gg.codigo}\n</p>
        <p>Nombre:${gg.nombre}\n</p>
        <p>Descripcion:${gg.descripcion}\n</p>
        <p>Cantidad:${gg.cantidad}\n</p>
        <p>Costo:${gg.costo}\n</p> \n
        <p>Total: ${gg.cantidad * gg.costo}</p>
        <p>------------------------------</p>`
        aux = aux -1;
        while (aux>0){
            let index = 1;
            gg = this.inicio
            while (index < aux){
                gg = gg.siguiente
                index++;
            }

            concat += `
            <p>Codigo:${gg.codigo}\n</p>
            <p>Nombre:${gg.nombre}\n</p>
            <p>Descripcion:${gg.descripcion}\n</p>
            <p>Cantidad:${gg.cantidad}\n</p>
            <p>Costo:${gg.costo}\n</p> \n
            <p>Total: ${gg.cantidad * gg.costo}</p>
            <p>------------------------------</p>`
            aux--;
        }
        return concat
    }





}