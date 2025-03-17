import ApiInstance from "./ApiInstance";

export const Api = {

 getNightSpots: (startIndex = 1, endIndex = 200, format = "json") =>
    ApiInstance.get(
        `${process.env.REACT_APP_SEOUL_API_KEY}/${format}/viewNightSpot/${startIndex}/${endIndex}/`
 ),
  // GET 요청
  getPlaces: (params) => ApiInstance.get("/places", { params }),

  // POST 요청
  createPlace: (data) => ApiInstance.post("/places", data),

  // PUT 요청
  updatePlace: (id, data) => ApiInstance.put(`/places/${id}`, data),

  // DELETE 요청
  deletePlace: (id) => ApiInstance.delete(`/places/${id}`),
};
