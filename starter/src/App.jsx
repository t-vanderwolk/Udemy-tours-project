import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = 'https://course-api.com/react-tours-project';

const App = () => {
const [isLoading, setIsLoading] = useState(true);
const [tours, setTours] = useState([])

const removeTour = (id) =>{
  const newTours = tours.filter((tour) => tour.id !==id);
  setTours(newTours);
};




const fetchTours = async () => {
  setIsLoading(true)
  try {
const response = await fetch(url);
const tours = await response.json()
setTours(tours);

}catch (error) {
  console.log(error);

  }
  setIsLoading(false)
};

useEffect(()=> {
fetchTours();
},[

]);

if (isLoading){
  return <main>
    <Loading />
  </main>
};
if (tours.length=== 0) {
  return (
    <main>
      <div className="title">

      </div>
      <h2>no tours left
        <button type="button" style={{marginTop:'2rem'}} className='btn' onClick={()=>fetchTours()}> refresh</button>
      </h2>
    </main>
  )
}
return <main>
     <Tours tours={tours} removeTour={removeTour} />
</main>

  return <h2>Tours Starter</h2>;
};
export default App;
