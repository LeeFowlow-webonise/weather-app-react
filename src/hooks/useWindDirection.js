//not currently called anywhere, but a useful tool that I've left as a hook.

const useWindDirection = (degrees) => {
    const directions = ['north', 'northeast', 'east', 'southeast', 'south', 'southwest', 'west', 'northwest']

    let degreeCalc = Math.round((degrees / 360) * 8);

    return (directions[degreeCalc]);
}

export default useWindDirection;