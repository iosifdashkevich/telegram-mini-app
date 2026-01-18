export default async function handler(req, res) {
  const FF_API_KEY = process.env.FF_API_KEY;

  try {
    const response = await fetch(`https://api.ff.io/some-endpoint?key=${FF_API_KEY}`);
    const data = await response.json().catch(() => ({ message: 'Ошибка API' }));

    res.status(200).json({ status: 'ok', message: 'API работает!', ff_data: data });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Ошибка API', error: error.message });
  }
}
