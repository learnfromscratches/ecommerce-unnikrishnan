import { mockData } from "@/utils/mockdata";

export default function handler(req, res) {
  let { category, brand } = req.query;
  console.log(category);

  if (typeof category == "string") {
    category = [category];
  }
  if (typeof brand == "string") {
    brand = [brand];
  }
  console.log(category);
  if (category && brand) {
    const filtered = mockData.filter(item => {
      return category.includes(item.category) && brand.includes(item.brand);
    });
    res.status(200).json(filtered);
  } else if (category) {
    const filtered = mockData.filter(item => {
      return category.includes(item.category);
    });
    res.status(200).json(filtered);
  } else if (brand) {
    const filtered = mockData.filter(item => {
      return brand.includes(item.brand);
    });
    res.status(200).json(filtered);
  } else {
    res.status(200).json(mockData);
  }
}
