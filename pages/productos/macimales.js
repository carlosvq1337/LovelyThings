import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Macetas Animales">
            <Producto
                name="Macetas Animales"
                status="Disponible"
                imgSrc="/products/amigurumis/macimales.jpg"
                waMsg="Hola, me interesan las macetas animales ofrecidas en Lovely Things!"
                size="12 x 12 cm"
                price="7 000 CRC"
            />
        </PageLayout>
    )
}

export default productPage
