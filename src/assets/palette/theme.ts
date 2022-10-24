import { createTheme } from "@material-ui/core/styles";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#57cc99",
      dark: '#22577a',
      
    },
    text: {
        primary: '#FFFFF',
        secondary: '#FFFFF'
    },
    
  },
  typography: {
    fontSize: 18,
    fontFamily: [
        'Source Sans Pro'
    ].join(',')
  },
  
});
