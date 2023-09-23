import './App.css';
import { useEffect, useState } from 'react';
import Nutrition from './Nutrition';
import logoGreen from './greenLogo.png';
import Calories from './Calories';
import Swal from'sweetalert2';
import LoaderPage from './Loader/LoaderPage';


function App() {
  const my_ID = 'db302ea7';
  const my_key = '21d7ed0b323933631858e9f607703e8d';
  const url = 'https://api.edamam.com/api/nutrition-details';

  const [mySearch, setMySearch] = useState();
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [myNutrition, setMyNutrition] = useState();
  const [stateLoader, setStateLoader] = useState(false);

  const getData = async (ingr) => {
    setStateLoader(true);

    const response = await fetch(`${url}?app_id=${my_ID}&app_key=${my_key}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ingr: ingr})
  });
    if (response.ok) {
      setStateLoader(false);
      const data = await response.json();
      setMyNutrition(data);
      console.log(data);
    }
      
    else {
       setStateLoader(false);
        Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'We cannot calculate the nutrition for some ingredients. Please check spelling and/or enter missing quantity of ingredients.',
    });
    }
       
    
  }
  
  const myRecipeSearch = (e) => {
     setMySearch(e.target.value);
}
const finalSearch = (e) => {
  e.preventDefault();
  setWordSubmitted(mySearch);
  
}

useEffect(() => {
  if (wordSubmitted !== '') {
    let ingr = wordSubmitted.split(/[,,;,\n,\r]/);
    getData(ingr);
  }
}, [wordSubmitted])
  return (
    <div className="App">
     

      <div className='lineLogo'>
          <hr className='line'/>
          <img src={logoGreen} alt="green logo" width="38px"/>
          <hr className='line'/>
        </div>
      <div className='positionCenter'>
        <h1>Get Nutrition Facts Now</h1>
         
        
        <form onSubmit={finalSearch}>
          {stateLoader && <LoaderPage />}
          <textarea
            placeholder="Search..."
            id="input"
            onChange={myRecipeSearch}
          />
          <button className='btn' type="submit">Analyze</button>
        </form>
      </div>
      
      <div>
        
        {
          myNutrition && Object.values(myNutrition.totalNutrientsKCal)
          .map(({ label, quantity, unit,  }) =>
            <Calories
              label={label}
              quantity={quantity}
              unit={unit}
            />
          )
        }
        {
          myNutrition && Object.values(myNutrition.totalNutrients)
            .map(({ label, quantity, unit,  }) =>
              <Nutrition
                label={label}
                quantity={quantity}
                unit={unit}
              />
            )
        }
        
      </div>
    
    </div>
  );
}

export default App;
