import PageLayout from '../../components/layouts/page_layout'
import Producto from '../../components/producto'

const productPage = () => {
    return (
        <PageLayout title="Bebés (pequeños)">
            <Producto name="Bebés (pequeños)" status="Disponible" imgSrc="/products/amigurumis/bebes_peq.jpg" waMsg="Hola, me interesan los bebés pequeños ofrecidos en Lovely Things!" size="11 x 5 cm"/>
        </PageLayout>
    )
}

export default productPage