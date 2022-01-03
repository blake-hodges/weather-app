export default async function handler(req, res) {
  const { cityInput } = req.body;
  const getWeatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=d1ee4d8fbe1a104ef451e8f7773e5a6a`
  );

  const data = await getWeatherData.json();
  res.status(200).json(data);
}
