async function getCategoriesService(url) {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return { error: false, data };
    } else {
      return { error: true, message: "An error ocurred" };
    }
  } catch (error) {
    return { error: true, message: "An error ocurred" };
  }
}

export { getCategoriesService };
