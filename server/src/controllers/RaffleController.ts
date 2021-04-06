import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import Raffle from '../models/Raffle';

import { getRaffleResult, getRandomId, compare } from '../config/helper';
import ServerError from '../error/ServerError';

export default {

  async store(req: Request, res: Response) {

    const { min, max, amount } = req.body;

    if (!max || !min || !amount || min <= 0 || max <= 5 || max <= min) {
      throw new ServerError('Please check if you filled the blank correctly');
    }

    if ((max - min) < 5) {
      throw new ServerError('The difference between maximum number and minimum must be at least five');
    }

    if (max > 10000) {
      throw new ServerError('The maximum number cannot be higher than 10.000');
    }

    if (amount > ((max - min) / 2)) {
      throw new ServerError('The system cannot provide more than half of the maximum number for results');
    }

    let result: number[] = getRaffleResult(amount, min, max);
    result = result.sort(compare);

    const data = {
      id: getRandomId(20),
      min,
      max,
      result: JSON.stringify(result)
    }

    const repository = getRepository(Raffle);
    const raffleEntity = repository.create(data);

    await repository.save(raffleEntity);
    return res.json(raffleEntity);

  },

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const repository = getRepository(Raffle);
    const findRaffle = await repository.findOne({ id: (id as string) });

    if (!findRaffle) {
      throw new ServerError('Raffle not found', 404);
    }

    let result = JSON.parse(findRaffle.result) as number[];
    const created_At = findRaffle.created_At.toLocaleString();

    return res.json({ ...findRaffle, result, created_At });

  }

}