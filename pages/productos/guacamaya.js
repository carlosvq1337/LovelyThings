import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Guacamaya">
            <Producto name="Guacamaya" status="Disponible" imgSrc="/products/amigurumis/guacamaya.jpg" waMsg="Hola, me interesa la guacamaya ofrecida en Lovely Things!" size="29 x 7 cm" description="Hermosa guacamaya con patitas prensiles, que permiten posarla en cualquier lugar."/>
        </PageLayout>
    )
}

export default productPage