import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Cupcakes">
            <Producto
                name="Cupcakes"
                status="Disponible"
                imgSrc="/products/amigurumis/cupcakes.jpg"
                waMsg="Hola, me interesan los cupcakes ofrecidos en Lovely Things!"
                size="9 x 9 cm"
                price="4 500 CRC"
            />
        </PageLayout>
    )
}

export default productPage
