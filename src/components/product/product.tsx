import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store"
import { useEffect } from "react";
import { getProductData } from "./product-reducer";
import ProductDetails from "../product-detail/product-details";
import ProductSales from "../product-sales/product-sales";
import ProductTable from "../product-table/product-table";


export const Product: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getProductData());
    },[dispatch])
    
    return (
        <div className="product-container">
            <ProductDetails />
            <div className="right-container">
                <ProductSales />
                <ProductTable />
            </div>
        </div>
    )
}