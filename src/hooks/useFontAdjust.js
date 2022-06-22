const useFontAdjust = (weather) => {

    if (weather === 'lightintensitydrizzle' || weather === 'heavyintensityrain' || weather === 'overcastclouds'){
      document.body.getElementsByClassName('nav-link').style.color = 'white'
    }
}

export default useFontAdjust;