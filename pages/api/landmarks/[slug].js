const { landmarks } = require('./data.json')

export default function handler(req, res) {
  const data = landmarks.filter((landmark) => landmark.slug === req.query.slug)
  console.log(data)
  if (req.method === 'GET') res.status(200).json(data[0])
  else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
  }
}
