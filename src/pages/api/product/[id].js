import { mockData } from "@/utils/mockdata";

export default function handler(req, res) {
  const { id } = req.query;
  const filtered = mockData.filter(item => {
    return item.id == id;
  });
  if (filtered.length) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(200).json({});
  }
}
