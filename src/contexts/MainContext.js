import { createContext, useState, useEffect } from 'react'


const MainContext = createContext()
	
export default MainContext;

export const MainProvider = ({children}) => { 

	const [state, setState] = useState(false);
	const [getInTouchState, setGetInTouchState] = useState(false);

    const [contextTest, setContextTest] = useState('This Works')


		const handleClick = () => {
			// alert('State set')
			setState(true);
		  };

		  const handleClose = () => {
			// alert('State set down')
			setState(false);
			setGetInTouchState(false);
		  };
 
		const runGetInTouchSnackbar = () => {
			// alert('setting setter')
			setGetInTouchState(true);
		}


	let contextData = {
        contextTest:contextTest,
        handleClick:handleClick,
		handleClose:handleClose,
		getInTouchState:getInTouchState,
		runGetInTouchSnackbar:runGetInTouchSnackbar,
		state:state,
	}

	// useEffect(() => {
	// 	alert(state)
	// }, [state])
	

	return(
		<MainContext.Provider value={contextData}>
			{children}
		</MainContext.Provider>
	)
}