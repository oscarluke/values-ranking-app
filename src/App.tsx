import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Typography, Paper } from '@mui/material';
import ValuesList from './components/ValuesList';
import Results from './components/Results';

export type Value = {
  id: number;
  name: string;
  description: string;
  importance: 'V' | 'Q' | 'N' | null;
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1', // Indigo color similar to Zen Browser
    },
    secondary: {
      main: '#8b5cf6', // Purple accent
    },
    background: {
      default: '#0f172a', // Dark blue background
      paper: '#1e293b', // Slightly lighter blue for cards
    },
    text: {
      primary: '#f8fafc', // Light text
      secondary: '#94a3b8', // Muted text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 24px',
        },
      },
    },
  },
});

const initialValues: Value[] = [
  { id: 1, name: 'Acceptance', description: 'to be open to and accepting of myself, others, life etc', importance: null },
  { id: 2, name: 'Adventure', description: 'to be adventurous; to actively seek, create, or explore novel or stimulating experiences', importance: null },
  { id: 3, name: 'Assertiveness', description: 'to respectfully stand up for my rights and request what I want', importance: null },
  { id: 4, name: 'Authenticity', description: 'to be authentic, genuine, real; to be true to myself', importance: null },
  { id: 5, name: 'Beauty', description: 'to appreciate, create, nurture or cultivate beauty in myself, others, the environment etc', importance: null },
  { id: 6, name: 'Caring', description: 'to be caring towards myself, others, the environment etc', importance: null },
  { id: 7, name: 'Challenge', description: 'to keep challenging myself to grow, learn, improve', importance: null },
  { id: 8, name: 'Compassion', description: 'to act with kindness towards those who are suffering', importance: null },
  { id: 9, name: 'Connection', description: 'to engage fully in whatever I am doing, and be fully present with others', importance: null },
  { id: 10, name: 'Contribution', description: 'to contribute, help, assist, or make a positive difference to myself or others', importance: null },
  // ... Add all other values here
];

function App() {
  const [values, setValues] = useState<Value[]>(initialValues);
  const [showResults, setShowResults] = useState(false);

  const handleValueChange = (id: number, importance: 'V' | 'Q' | 'N' | null) => {
    setValues(values.map(value => 
      value.id === id ? { ...value, importance } : value
    ));
  };

  const handleComplete = () => {
    setShowResults(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Values Ranking Exercise
          </Typography>
          <Paper elevation={3} sx={{ p: 3 }}>
            {!showResults ? (
              <ValuesList 
                values={values} 
                onValueChange={handleValueChange}
                onComplete={handleComplete}
              />
            ) : (
              <Results values={values} />
            )}
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App; 