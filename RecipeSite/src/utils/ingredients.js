export function getIngredients(meal) {
  if (!meal) return [];

  return Array.from({ length: 20 }, (_, index) => {
    const number = index + 1;
    const ingredient = meal[`strIngredient${number}`]?.trim();
    const measure = meal[`strMeasure${number}`]?.trim();

    if (!ingredient) return null;

    return {
      ingredient,
      measure,
      label: measure ? `${measure} ${ingredient}` : ingredient,
    };
  }).filter(Boolean);
}
