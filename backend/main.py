from fastapi import FastAPI
import uvicorn
from openaq import OpenAQ
from datetime import datetime
from secret import api_key
from fastapi.middleware.cors import CORSMiddleware



app = FastAPI()
app.add_middleware( #cors
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
client = OpenAQ(api_key)
@app.get("/coordinate/lat={lat}&long={long}")
def get_data_by_coordinates(lat,long):
    lat = float(lat) # cast to int
    long = float(long)
    location = get_best_sensor_by_location((lat,long))
    print(location)
    if location == None:
        return {}
    return compute_history(location)
def sort_key(item):
    return datetime.fromisoformat(item['period']['datetime_from']['local'])


def compute_history(sensors) -> dict:
    start_date = "2025-02-01"
    data = {
        
    }
    for i in sensors:
        measurements = client.measurements.list(sensors_id=i, datetime_from=start_date, limit=20)
        dict = measurements.dict()['results']
        print(dict)
        dict = sorted(dict, key=sort_key)
        


        for i in dict:
            
            key = i["parameter"]["name"]
            value= i["value"]
            unit = i['parameter']["units"]
            try:
                data[key]
            except:
                data[key] = {}
            data[key]["unit"] = unit

            try:
                data[key]["history"].append(value)
            except:
                data[key]["history"] = [value]

    return data

def get_best_sensor_by_location(coordinates) -> int:
    locations = client.locations.list(limit=20, radius=25000, coordinates = coordinates).dict()
    results = locations["results"]
    if len(results) == 0:
        return None 
    best_sensor = max(results, key=lambda x: len(x["sensors"]))
    print(best_sensor)
    sensor_list=[]
    for i in best_sensor['sensors']:
        sensor_list.append(i['id'])
    
    return sensor_list
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)