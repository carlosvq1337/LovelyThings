import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Chanclas">
            <Producto name="Chanclas Dos" status="Disponible" price="2 000" imgSrc="/products/amigurumis/chanclas.jpg" waMsg="Hola, me interesan las Chanclas Dos ofrecidas en Lovely Things!"/>
        </PageLayout>
    )
}

export default productPage