import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1, 0),
    },
},
formWrapper: {
  minHeight: '80vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url("https://source.unsplash.com/random/1920x1080/?nature,abstract")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
},
// paper: {
//   padding: theme.spacing(3),
//   borderRadius: '20px',
//   maxWidth: 500,
//   margin: '20px auto',
//   boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
//   // background: 'linear-gradient(135deg, #fefeffff, #764ba2)', // default
//   // color: '#fff',
//   // transition: 'all 3s ease-in-out infinite',
//   // '&:hover': {
//   //   animation: '$colorShift 12s ease-in-out ', // ⬅️ ease-in
//     background: 'linear-gradient(135deg, #fefeffff, #764ba2, #FFC8DD, #9d6477ff, #CDB4DB, #BDE0FE, #62B6CB)',
//     transition: 'box-shadow 0.3s ease-in-out',
//     '&:hover':{
//     animation: '$colorShift 12s ease-in-out infinite',
//     },
//   },
// },
// 🔹 Keyframes for gradient shift
// '@keyframes colorShift': {
//   '0%': {
//     background: 'linear-gradient(135deg, #fefeffff, #764ba2)',
//   },
//   '25%': {
//     background: 'linear-gradient(135deg, #FFC8DD , #764ba2 )',
//   },
//   '50%': {
//     background: 'linear-gradient(135deg, #FFC8DD, #9d6477ff)',
//   },
//   '75%': {
//     background: 'linear-gradient(135deg, #CDB4DB, #BDE0FE)',
//   },
//   '100%': {
//     background: 'linear-gradient(135deg, #BDE0FE, #62B6CB)',
//   },
// },
paper: {
  borderRadius: '20px',
  maxWidth: 500,
  margin: '20px auto',
  boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
  background: 'linear-gradient(270deg, #fefeffff, #764ba2, #FFC8DD, #9d6477ff, #CDB4DB, #BDE0FE, #62B6CB)',
  backgroundSize: '1200% 1200%',
  color: '#fff',
  transition: 'all 0.3s ease-in',
  '&:hover': {
    animation: '$colorShift 12s ease-in-out infinite',
  },
},

// 🔹 Keyframes for smooth gradient animation
'@keyframes colorShift': {
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
},

heading: {
  color: '#080808ff',
  fontWeight: 700,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  textShadow: '0 0 8px #3f51b5',
},

form: {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
},
fileInput: {
  width: '90%',
  margin: '15px 0',
  padding: '10px',
  border: '2px dashed #ccc',
  borderRadius: '10px',
  textAlign: 'center',
  background: '#fafafa',
  color: '#000'
},
buttonSubmit: {
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1.5),
  borderRadius: '10px',
  fontWeight: 600,
  background: 'linear-gradient(135deg, #3f51b5, #5a73d8)',
  color: '#fff',
  perspective: '1000px',
  transition: 'transform 0.6s ease, background 0.3s ease',
  '& span': {
    display: 'inline-block',
    width: '100%',           // ✅ makes span cover full width
    textAlign: 'center',     // keeps text centered
    backfaceVisibility: 'hidden',
  },
  '&:hover': {
    background: 'linear-gradient(135deg, #2e3b8e, #3f51b5)',
    transform: 'rotateX(360deg)',
  },
},
  buttonClear: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: '10px',
    fontWeight: 900,
    color: 'Red',
    borderColor: '#f44336',
    '&:hover': {
      background: '#d45e51ff',
      color: '#fff'
    },
  },
  textFieldRounded: {
  '& .MuiOutlinedInput-root': {
    borderTopLeftRadius: '12px',   // 🔹 change this value as you like
    borderBottomRightRadius: '12px',  // 🔹 change this value as you like
  },
},

}));
