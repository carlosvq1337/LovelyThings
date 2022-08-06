import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Ovejas">
            <Producto name="Ovejas" status="Disponible" imgSrc="/products/amigurumis/ovejas.jpg" waMsg="Hola, me interesan las ovejas ofrecidas en Lovely Things!" size="11 x 13 cm"/>
        </PageLayout>
    )
}

export default productPage