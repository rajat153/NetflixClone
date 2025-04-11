import OpenAI from 'openai';
import {OPENAI_KEY} from '../utils/constants'

const openai = new OpenAI({
  apiKey:OPENAI_KEY,
  dangerouslyAllowBrowser : true // This is the default and can be omitted
});

// const response = await client.responses.create({
//   model: 'gpt-4o',
//   instructions: 'You are a coding assistant that talks like a pirate',
//   input: 'Are semicolons optional in JavaScript?',
// });


export default openai;
