import { z } from 'zod';

export const formSchema = z.object({
    title: z.string()
        .min(1, 'O campo "Título" é obrigatório')
        .max(50, 'O campo "Título" deve ter no máximo 50 caracteres')
        .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/), 'O campo "Título" não deve conter caracteres especiais')
        .trim(),
    link: z.string()
        .min(1, 'O campo "Link do video" é obrigatório')
        .url('Informe uma URL válida')
        .trim()
})