import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemText, 
  Button, 
  Box, 
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Paper,
  useTheme
} from '@mui/material';
import { Value } from '../App';

interface ValuesListProps {
  values: Value[];
  onValueChange: (id: number, importance: 'V' | 'Q' | 'N' | null) => void;
  onComplete: () => void;
}

const ValuesList: React.FC<ValuesListProps> = ({ values, onValueChange, onComplete }) => {
  const theme = useTheme();
  const allValuesRanked = values.every(value => value.importance !== null);

  return (
    <Box>
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
          color: theme.palette.primary.main,
          mb: 3
        }}
      >
        Rate each value as:
      </Typography>
      <Typography 
        variant="body1" 
        gutterBottom 
        sx={{ 
          color: theme.palette.text.secondary,
          mb: 4
        }}
      >
        V = Very important, Q = Quite important, N = Not so important
      </Typography>
      
      <List sx={{ mb: 4 }}>
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
                    {`${value.id}. ${value.name}`}
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
              <RadioGroup
                row
                value={value.importance || ''}
                onChange={(e) => onValueChange(value.id, e.target.value as 'V' | 'Q' | 'N' | null)}
                sx={{
                  '& .MuiFormControlLabel-label': {
                    color: theme.palette.text.secondary,
                  }
                }}
              >
                <FormControlLabel 
                  value="V" 
                  control={
                    <Radio 
                      sx={{
                        color: theme.palette.primary.main,
                        '&.Mui-checked': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    />
                  } 
                  label="V" 
                />
                <FormControlLabel 
                  value="Q" 
                  control={
                    <Radio 
                      sx={{
                        color: theme.palette.primary.main,
                        '&.Mui-checked': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    />
                  } 
                  label="Q" 
                />
                <FormControlLabel 
                  value="N" 
                  control={
                    <Radio 
                      sx={{
                        color: theme.palette.primary.main,
                        '&.Mui-checked': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    />
                  } 
                  label="N" 
                />
              </RadioGroup>
            </ListItem>
          </Paper>
        ))}
      </List>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={onComplete}
          disabled={!allValuesRanked}
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            boxShadow: '0 3px 5px 2px rgba(99, 102, 241, .3)',
            '&:hover': {
              background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
            },
            '&.Mui-disabled': {
              background: theme.palette.action.disabledBackground,
            }
          }}
        >
          View Results
        </Button>
      </Box>
    </Box>
  );
};

export default ValuesList; 