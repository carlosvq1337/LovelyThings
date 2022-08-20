import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Cacatúa">
            <Producto
                name="Cacatúa"
                status="Disponible"
                imgSrc="/products/amigurumis/cacatua.jpg"
                waMsg="Hola, me interesa la cacatúa ofrecida en Lovely Things!"
                size="28 x 7 cm"
                description="Hermosa cacatúa con patitas prensiles, que permiten posarla en cualquier lugar."
                price="17 000 CRC"
            />
        </PageLayout>
    )
}

export default productPage
