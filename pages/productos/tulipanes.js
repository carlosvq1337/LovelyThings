import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Perritos">
            <Producto
                name="Perritos"
                status="Disponible"
                imgSrc="/products/amigurumis/perros.jpg"
                waMsg="Hola, me interesan los perritos ofrecidos en Lovely Things!"
                size="8 x 7 cm"
                price="5 000 CRC"
            />
        </PageLayout>
    )
}

export default productPage
