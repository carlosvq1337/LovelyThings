
import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Chanclas">
            <Producto name="Chanclas" status="Disponible" price="1 000" imgSrc="/products/amigurumis/chanclas.jpg" waMsg="Hola, me interesan las chanclas ofrecidas en Lovely Things!"/>
        </PageLayout>
    )
}

export default productPage