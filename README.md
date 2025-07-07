# Portfolio

## Environment Variables

This project uses environment variables to keep sensitive information like API keys secure.

- Create a `.env` file in the root directory.
- Add your OpenAI API key in the `.env` file as follows:
  ```
  OPENAI_API_KEY=your_openai_api_key_here
  ```
- The `.env` file is included in `.gitignore` to prevent it from being committed to version control.

## Deployment on Vercel

- The API route is located in `api/chatbot.js`.
- The `public/vercel.json` file is configured to build the API and serve static files.
- Set the `OPENAI_API_KEY` environment variable in your Vercel project dashboard under Settings > Environment Variables.
- Deploy the project to Vercel using the standard deployment process.

## Project Structure

- `api/` - Contains serverless API functions.
- `public/` - Contains static assets like CSS, JS, images, and PDFs.
- Root directory contains HTML files and configuration files.
