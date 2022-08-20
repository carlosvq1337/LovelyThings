import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Hormigas">
            <Producto
                name="Hormigas"
                status="Disponible"
                imgSrc="/products/amigurumis/hormingas.jpg"
                waMsg="Hola, me interesan las hormigas ofrecidas en Lovely Things!"
                size="22 x 6 cm"
                description="Hormigas con floreritos miniatura y extremidades plegables para una amplia variedad de poses"
                price="16 500 CRC"
            />
        </PageLayout>
    )
}

export default productPage
