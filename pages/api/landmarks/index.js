const { landmarks_data } = require("./data/hlsfdata.json")

export default function handler(req, res) {
  if (req.method === "GET") {
    let data = []
    landmarks_data.forEach((lm) => {
      const lmData = {
        id: lm.id,
        title: lm.title,
        title_short: lm.title_short,
        title_stub: lm.title_stub,
        number: lm.number,
        group: lm.group,
        slug: lm.slug,
      }
      data.push(lmData)
    })
    res.status(200).json(data)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
  }
}
