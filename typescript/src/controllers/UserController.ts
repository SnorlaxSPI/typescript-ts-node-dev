/**
 * Para um fluxo MVC , é a criação dos controllers: 
 * 
 * Receber uma requisição e depois conseguir retornar uma resposta
 *  
 * Controller serve para listar todos os usuários
 */

import { Request, Response } from 'express';

const users = [
  { name: 'Alessandro', email: 'aflinsjr@icloud.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
}