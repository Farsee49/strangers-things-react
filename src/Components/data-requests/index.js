const COHORT_NAME = '2301-ftb-et-web-pt'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;



export const fetchPosts = async () => {

    console.log(9900)
    try {
      const response = await fetch(`${BASE_URL}/posts`)
  
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  