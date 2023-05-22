import { mockData } from "@/utils/mockdata";

export default function handler(req, res) {
  let { category, brand } = req.query;

  if (typeof category == "string") {
    category = [category];
  }
  if (typeof brand == "string") {
    brand = [brand];
  }

  const lowCategory = category && category.map(item => item.toLowerCase());
  const lowBrand = brand && brand.map(item => item.toLowerCase());

  if (category && brand) {
    const filtered = mockData.filter(item => {
      return (
        lowCategory.includes(item.category.toLowerCase()) &&
        lowBrand.includes(item.brand.toLowerCase())
      );
    });
    res.status(200).json(filtered);
  } else if (category) {
    const filtered = mockData.filter(item => {
      return lowCategory.includes(item.category.toLowerCase());
    });
    res.status(200).json(filtered);
  } else if (brand) {
    const filtered = mockData.filter(item => {
      return lowBrand.includes(item.brand.toLowerCase());
    });
    res.status(200).json(filtered);
  } else {
    res.status(200).json(mockData);
  }
}
