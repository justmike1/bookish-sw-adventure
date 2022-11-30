import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';
import { Request, Response } from 'express';

const pipeline = promisify(stream.pipeline);
const url: string = `${process.env.NEXT_PUBLIC_CV_LINK}`;

const handler = async (req: Request, res: Response) => {
  const response = await fetch(url); // wait till for resolve to complete
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=MikeJosephCV.pdf');
  await pipeline(response.body, res);
};

export default handler;
