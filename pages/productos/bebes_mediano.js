import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Bebés (medianos)">
            <Producto
                name="Bebés (medianos)"
                status="Disponible"
                imgSrc="/products/amigurumis/bebes_med.jpg"
                waMsg="Hola, me interesan los bebés medianos ofrecidos en Lovely Things!"
                size="16 x 8 cm"
                price="6 000 CRC"
            />
        </PageLayout>
    )
}

export default productPage
