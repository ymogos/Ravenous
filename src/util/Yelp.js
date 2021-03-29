const apikey='dS97jLZ5FFhFJE2wfuSfhzP7bSEyhaLdTp9KLm_VsmVegTmzcMi-IIGrbA70GaniWNtupPV7oruSOLHPORYTZBtOKWEABYqIN8PgfPaMrz77F7D_dFpjkLngm2ZzX3Yx'

const Yelp = {
    searchYelp(term, location, sortBy){
  return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{

  headers: {
      Authorization: `Bearer ${apikey}`
       },
   }).then((response) => {
        return response.json();
    }).then((jsonResponse) => {
      if(jsonResponse.businesses){
        return jsonResponse.businesses.map((business) => {
            console.log(business);
              return {
                  id: business.id,
                  imageSrc: business.image_url,
                  name: business.name,
                  address: business.location.address1,
                  city: business.location.city,
                  state: business.location.state,
                  zipCode: business.location.zip_code,
                  category: business.categories[0].title,
                  rating: business.rating,
                  reviewCount: business.review_count,
              };
        });
      }
    })
}
}

export default Yelp;