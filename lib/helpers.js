import dbConnect from "./db";
import Spot from "./models/Spot";

export async function getSpotStats() {
  await dbConnect(); 

  const spots = await Spot.find();
  
  const total = spots.length;
  const available = spots.filter((s) => s.available).length;
  const unavailable = total - available;
  const categories = [...new Set(spots.map((s) => s.category))];
  
  const avgPrice =
    total > 0
      ? Math.round(spots.reduce((sum, s) => sum + s.price, 0) / total)
      : 0;

  return {
    total,
    available,
    unavailable,
    categoriesCount: categories.length,
    avgPrice,
  };
}