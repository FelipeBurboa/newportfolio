import { z } from 'zod';

const ContactFormSchema = z.object({
  nombre: z.string().min(1, { message: 'El nombre es requerido' }),
  email: z.string().email().min(1, { message: 'El email es requerido' }),
  asunto: z.string().min(1, { message: 'El asunto es requerido' }),
  mensaje: z.string().min(1, { message: 'El mensaje es requerido' }),
});

export default ContactFormSchema;
