const { landmarks_data } = require("./landmarks/data/hlsfdata.json")

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
        group_order: lm.group_order,
        slug: lm.slug,
        marker_coordinates_lat: lm.marker_coordinates_lat,
        marker_coordinates_lng: lm.marker_coordinates_lng,
        marker_address: lm.marker_address,
      }
      data.push(lmData)
    })
    res.status(200).json(data)
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
  }
}
