import React, { useState } from 'react';
import { 
  Box, 
  Typography,
  Button,
  Paper,
  useTheme,
  LinearProgress,
  Fade,
  Slide,
  IconButton
} from '@mui/material';
import { Value } from '../App';
import { motion, AnimatePresence } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';

interface ValuesListProps {
  values: Value[];
  onValueChange: (id: number, importance: 'V' | 'Q' | 'N' | null) => void;
  onComplete: () => void;
}

const ValuesList: React.FC<ValuesListProps> = ({ values, onValueChange, onComplete }) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const allValuesRanked = values.every(value => value.importance !== null);

  const handleRating = (importance: 'V' | 'Q' | 'N') => {
    onValueChange(values[currentIndex].id, importance);
    if (currentIndex < values.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const progress = ((currentIndex + 1) / values.length) * 100;

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', px: 2 }}>
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h5" 
          gutterBottom 
          sx={{ 
            color: theme.palette.primary.main,
            mb: 2
          }}
        >
          Rate each value as:
        </Typography>
        <Typography 
          variant="body1" 
          gutterBottom 
          sx={{ 
            color: theme.palette.text.secondary,
            mb: 3
          }}
        >
          How important is this value to you?
        </Typography>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: theme.palette.background.paper,
            '& .MuiLinearProgress-bar': {
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
            }
          }} 
        />
        <Typography 
          variant="body2" 
          sx={{ 
            color: theme.palette.text.secondary,
            mt: 1,
            textAlign: 'right'
          }}
        >
          {currentIndex + 1} of {values.length}
        </Typography>
      </Box>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Paper 
            elevation={0} 
            sx={{ 
              p: 4,
              mb: 4,
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: 4,
              background: `linear-gradient(45deg, ${theme.palette.background.paper} 30%, ${theme.palette.background.default} 90%)`,
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                color: theme.palette.text.primary,
                mb: 2
              }}
            >
              {values[currentIndex].name}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: theme.palette.text.secondary,
                mb: 4
              }}
            >
              {values[currentIndex].description}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="outlined"
                size="large"
                onClick={() => handleRating('N')}
                sx={{
                  borderColor: theme.palette.text.secondary,
                  color: theme.palette.text.secondary,
                  '&:hover': {
                    borderColor: theme.palette.error.main,
                    color: theme.palette.error.main,
                  }
                }}
              >
                Not Important
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => handleRating('Q')}
                sx={{
                  borderColor: theme.palette.warning.main,
                  color: theme.palette.warning.main,
                  '&:hover': {
                    borderColor: theme.palette.warning.dark,
                    color: theme.palette.warning.dark,
                  }
                }}
              >
                Quite Important
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => handleRating('V')}
                sx={{
                  borderColor: theme.palette.success.main,
                  color: theme.palette.success.main,
                  '&:hover': {
                    borderColor: theme.palette.success.dark,
                    color: theme.palette.success.dark,
                  }
                }}
              >
                Very Important
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </AnimatePresence>

      {allValuesRanked && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            size="large"
            onClick={onComplete}
            sx={{
              background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
              boxShadow: '0 3px 5px 2px rgba(99, 102, 241, .3)',
              '&:hover': {
                background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`,
              }
            }}
          >
            View Results
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ValuesList; 