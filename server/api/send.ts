import { Resend } from 'resend';
const config = useRuntimeConfig();

const resend = new Resend(config.private.resendApiKey);

export default defineEventHandler(async (event) => {
  try {
    // Extrae el email del cuerpo de la solicitud
    const { email } = await readBody(event);

    if (!email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Correo es requerido',
        message: 'El campo de correo es obligatorio'
      });
    }

    // Crea un contacto con el correo proporcionado
    const result = await resend.contacts.create({
      email,
      firstName: '', // Si no se proporciona un nombre, puedes dejarlo vacío
      lastName: '',
      unsubscribed: false,
      audienceId: 'b110c0a6-21e5-4469-938d-4d4ed1432136',
    });

    return {
      success: true,
      data: result
    };
  } catch (error) {
    // Usa un type guard para asegurarte de que 'error' es una instancia de Error
    if (error instanceof Error) {
      console.error('Error en el servidor:', error);

      // Lanza un error que Nuxt pueda manejar
      throw createError({
        statusCode: 500,
        statusMessage: 'Error al crear el contacto',
        message: error.message
      });
    } else {
      console.error('Error desconocido:', error);

      // Lanza un error genérico si no es de tipo Error
      throw createError({
        statusCode: 500,
        statusMessage: 'Error desconocido al crear el contacto',
        message: 'Ocurrió un error inesperado'
      });
    }
  }
});
