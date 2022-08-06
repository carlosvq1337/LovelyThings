import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Hormigas">
            <Producto name="Hormigas" status="Disponible" imgSrc="/products/amigurumis/hormingas.jpg" waMsg="Hola, me interesan las hormigas ofrecidas en Lovely Things!" size="22 x 6 cm"/>
        </PageLayout>
    )
}

export default productPage