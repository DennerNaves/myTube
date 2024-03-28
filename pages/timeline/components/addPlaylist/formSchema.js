import { z } from 'zod';

export const formSchema = z.object({
    playlistName: z.string()
        .min(1, 'O campo "Nome da playlist" é obrigatório')
        .max(50, 'O campo "Nome da playlist" deve ter no máximo 50 caracteres')
        .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/), 'O campo "Nome da playlist" não deve conter caracteres especiais')
        .trim()
})