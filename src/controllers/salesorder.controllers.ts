import { Request, Response } from 'express';
import client from '../elasticsearch/client';

export const getOrdersController = (req: Request, res: Response): void => {
//   const users: User[] = getUsers();
// Test the connection

    try {
      const response =  client.info();
      console.log('Connected to Elasticsearch:', response);
    } catch (error) {
      console.error('Elasticsearch connection error:', error);
    }

  res.status(200).json({ Salesorder: 'Sales order' });
};