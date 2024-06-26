import { Request, Response } from 'express';
import { calculateBills } from '../services/withdrawService';

export const makeWithdraw = (req: Request, res: Response): void => {
    const { value } = req.body;

    if (typeof value !== 'number' || value <= 0 || !Number.isInteger(value)) {
        res.status(400).json({ error: 'O valor de saque deve ser um número inteiro positivo!' });
        return;
    }

    const result = calculateBills(value);
    res.json(result);
};