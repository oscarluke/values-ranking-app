import React from 'react';
import { 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  Paper,
  Divider,
  useTheme
} from '@mui/material';
import { Value } from '../App';

interface ResultsProps {
  values: Value[];
}

const Results: React.FC<ResultsProps> = ({ values }) => {
  const theme = useTheme();
  const veryImportant = values.filter(v => v.importance === 'V');
  const quiteImportant = values.filter(v => v.importance === 'Q');
  const notImportant = values.filter(v => v.importance === 'N');

  const renderValueList = (values: Value[], title: string) => (
    <Box sx={{ mb: 4 }}>
      <Typography 
        variant="h6" 
        gutterBottom 
        sx={{ 
          color: theme.palette.primary.main,
          mb: 2
        }}
      >
        {title} ({values.length})
      </Typography>
      <List>
        {values.map((value) => (
          <Paper 
            key={value.id} 
            elevation={0}
            sx={{ 
              mb: 2,
              p: 2,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.2s ease-in-out',
              '&:hover': {
                borderColor: theme.palette.primary.main,
                transform: 'translateY(-2px)',
              }
            }}
          >
            <ListItem>
              <ListItemText
                primary={
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: theme.palette.text.primary,
                      mb: 1
                    }}
                  >
                    {value.name}
                  </Typography>
                }
                secondary={
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: theme.palette.text.secondary
                    }}
                  >
                    {value.description}
                  </Typography>
                }
              />
            </ListItem>
          </Paper>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          color: theme.palette.primary.main,
          mb: 4
        }}
      >
        Your Values Analysis
      </Typography>
      
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          mb: 4,
          border: `1px solid ${theme.palette.divider}`,
          background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 90%)`,
        }}
      >
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ 
            color: theme.palette.primary.main,
            mb: 3
          }}
        >
          Very Important Values
        </Typography>
        {renderValueList(veryImportant, 'Very Important Values')}
        
        <Divider sx={{ my: 3, borderColor: theme.palette.divider }} />
        
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ 
            color: theme.palette.primary.main,
            mb: 3
          }}
        >
          Quite Important Values
        </Typography>
        {renderValueList(quiteImportant, 'Quite Important Values')}
        
        <Divider sx={{ my: 3, borderColor: theme.palette.divider }} />
        
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ 
            color: theme.palette.primary.main,
            mb: 3
          }}
        >
          Not So Important Values
        </Typography>
        {renderValueList(notImportant, 'Not So Important Values')}
      </Paper>

      <Box sx={{ mt: 4 }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ 
            color: theme.palette.primary.main,
            mb: 3
          }}
        >
          Next Steps
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ 
            color: theme.palette.text.secondary,
            mb: 2
          }}
        >
          From your Very Important values, select the top three that are most important to you at this point in time.
          These will be your guiding values for the next steps in your personal development journey.
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: theme.palette.text.secondary
          }}
        >
          Consider how you can live these values in your daily life. What specific actions can you take
          to align your behavior with these values?
        </Typography>
      </Box>
    </Box>
  );
};

export default Results; 