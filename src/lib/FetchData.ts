import { type Doc, type API } from "../types/api";

export const getDataByID = async  ({id}: {id:string}) => { 
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`)
  const lanzamientos = (await res.json()) as Doc;   
  return lanzamientos;
} 

export const getData = async  () => { 
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });
  
  const { docs: lanzamientos } = (await res.json()) as API;   
  return lanzamientos;
}

export const getDataFirst = async  (startPosition: number) => { 
  const res = await fetch("https://api.spacexdata.com/v5/launches/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "desc",
        },
        limit: startPosition + 12,
      },
    }),
  });
  
  const { docs: lanzamientos } = (await res.json()) as API;   
  return lanzamientos.slice(startPosition, startPosition + 12);
}