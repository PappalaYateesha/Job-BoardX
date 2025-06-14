import React from 'react';
import { Box, Typography, Button, Card, CardContent, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SurveyAnalyticsCard from './SurveyAnalyticsCard';
import { Survey } from '../services/survey';

type Props = {
  surveys: Survey[];
  selectedSurveyIndex?: number;
  onSelectSurvey?: (index: number) => void;
};

const SurveyOverview: React.FC<Props> = ({
  surveys,
  selectedSurveyIndex,
  onSelectSurvey,
}) => {
  const navigate = useNavigate();

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
      </Stack>


      <Stack spacing={2}>
        {surveys.map((survey, i) => (
          <Box
            key={survey._id}
            onClick={() => onSelectSurvey?.(i)}
            sx={{
              cursor: 'pointer',
              border: i === selectedSurveyIndex
                ? (theme) => `2px solid ${theme.palette.primary.main}`
                : (theme) => `1px solid ${theme.palette.divider}`,
              borderRadius: 1,
              padding: 1,
              transition: 'border-color 0.3s ease',
              '&:hover': {
                borderColor: (theme) => theme.palette.primary.main,
                bgcolor: (theme) => theme.palette.action.hover,
              },
            }}
          >
            <SurveyAnalyticsCard survey={survey} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default SurveyOverview;
