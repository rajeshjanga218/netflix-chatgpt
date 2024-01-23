import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_GPT_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;

// {
//   "id": "chatcmpl-8dxVtUvEOqiMcoBxuKwiar1IjZgM1",
//   "object": "chat.completion",
//   "created": 1704534253,
//   "model": "gpt-3.5-turbo-0613",
//   "choices": [
//     {
//       "index": 0,
//       "message": {
//         "role": "assistant",
//         "content": "Lagaan, Dangal, Gangs of Wasseypur, Taare Zameen Par, Dilwale Dulhania Le Jayenge"
//       },
//       "logprobs": null,
//       "finish_reason": "stop"
//     }
//   ],
//   "usage": {
//     "prompt_tokens": 65,
//     "completion_tokens": 32,
//     "total_tokens": 97
//   },
//   "system_fingerprint": null
// }
