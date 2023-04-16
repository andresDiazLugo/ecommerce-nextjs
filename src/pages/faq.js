import Layout from "@/components/Layout";
import style from "../styles/faq.module.css";
export default function faq() {
  return (
    <Layout>
       <section className={style.section}>
            <h2>Preguntas frecuentes</h2>
            
            <h3>¿Cómo hago para registrarme?</h3>
            <p>Para registrarte en nuestro sitio, simplemente haz clic en el botón "Registrarse" en la página de inicio y sigue las instrucciones.</p>

            <h3>¿Cómo puedo cambiar mi contraseña?</h3>
            <p>Para cambiar tu contraseña, inicia sesión en tu cuenta y ve a la sección de "Configuración de la cuenta". Allí encontrarás la opción para cambiar tu contraseña.</p>

            <h3>¿Cuál es la política de devoluciones?</h3>
            <p>Nuestra política de devoluciones es de 30 días. Si no estás satisfecho con tu compra, puedes devolver el producto en un plazo de 30 días y te reembolsaremos el importe total.</p>

            <h3>¿Cómo puedo ponerme en contacto con el servicio de atención al cliente?</h3>
            <p>Puedes ponerte en contacto con nuestro servicio de atención al cliente a través del formulario de contacto en nuestro sitio web o enviando un correo electrónico a nuestro equipo de soporte.</p>
        </section>
    </Layout>
  )
}