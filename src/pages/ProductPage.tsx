import  {useContext,} from 'react'
import { useProducts } from "../hooks/products"
import {Product} from '../components/Product'
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Modal } from "../components/Modal";
import {CreateProduct} from '../components/CreateProduct'
import {IProduct} from '../models' 
import { ModalContext } from '../context/ModalContext';

export function ProductPage () {
  const {products, error, loading, addProduct} = useProducts()
  const {modal, openModalW, closeModalW } =  useContext(ModalContext)

  const createHandler = (product:IProduct) =>{
    closeModalW()
    addProduct(product)
  }

 return (
  
  <div className='container mx-auto max-w-2pxl pt-5'>
    { loading && <Loader /> }
    { error && <ErrorMessage error={ error } /> }
    { products.map(product => <Product product={product} key={product.id} /> ) }
    
    
    {modal && <Modal title="Create new product" onClose= {closeModalW}>
      <CreateProduct onCreate={createHandler} />
    </Modal>}

    <button className="fixed bottom-10 right-10 rounded-full bg-red-700 text-white text-2lx px-8 py-4 hover:text-black" 
    onClick={openModalW}
    >+</button>
  </div>
 )
}