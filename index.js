class ProductManager {
    constructor() {
        this.products = []
    }

    static id = 0;


    addProduct(title, description, price, img, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log(`El código ${code} está repetido`)
                break
            }
        }

        const newProduct = {
            title,
            description,
            price,
            img,
            code,
            stock
        }

    if (!Object.values(newProduct).includes(undefined)) {  
        ProductManager.idd++
        this.products.push({
            ...newProduct,
            id: ProductManager.id
        })
    } else {
        console.log("Todos los campos son requeridos")
        }
    }

    getProduct() {
        return this.products
    }

    productExist(id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id) {
         !this.productExist(id) ? console.log("Not Found") :  console.log(this,productExist())  
    }
}

const productos = new ProductManager()

//Primera llamada al arrelgo vacio
console.log(productos.getProduct())

//Agregamos productos
productos.addProduct("titulo1", "descripcion1", 1000, "imagen1", "123", 10)
productos.addProduct("titulo2", "descripcion2", 3000, "imagen2", "124", 15)


//Segunda llamada = arreglo con producto
console.log(productos.getProduct())

//Validación de codigo repetido
//productos.addProduct("titulo3", "descripcion3", 3000, "imagen3", "124", 20)

//Búsqueda por ID
//productos.getProductById(2)

//Búsqueda por ID no encontrado
productos.getProductById(3)

