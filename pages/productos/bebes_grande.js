
import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Bebe">
            <Producto name="Bebe" status="Disponible"  imgSrc="/products/amigurumis/bebes_grande.jpg" waMsg="Hola, me interesa el bebe grande ofrecido en Lovely Things!" size="28 x 11 cm"/>
        </PageLayout>
    )
}

export default productPage