const { landmarks_data } = require('./data/hlsfdata.json')

export default function handler(req, res) {
  const data = landmarks_data.filter((landmark) => landmark.slug === req.query.slug)
  if (req.method === 'GET') res.status(200).json(data[0])
  else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
  }
}
