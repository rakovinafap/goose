import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

// Анимация появления
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TextBlock = () => {
    return (
        <Box
            sx={{
                padding: '3rem',
                background: 'linear-gradient(135deg, #e3f2fd, #ffffff)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                animation: `${fadeIn} 1s ease-out`,
                maxWidth: '800px',
                margin: '2rem auto',
            }}
        >
            <Typography
                variant="h4"
                gutterBottom
                sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 'bold',
                    color: '#1976d2',
                    textAlign: 'center',
                    marginBottom: '1rem',
                }}
            >
                Почему выбирают нас?
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    color: '#555',
                    lineHeight: 1.75,
                    textAlign: 'center',
                    padding: { xs: '0 1rem', md: '0' },
                }}
            >
                <span style={{ fontWeight: 'bold', color: '#1976d2' }}>"Гусь-обнимусь"</span> — это не просто игрушки.
                Это настоящие друзья, которые радуют детей и взрослых. Мы используем только качественные материалы, чтобы каждая игрушка была безопасной и долговечной.
            </Typography>
        </Box>
    );
};

export default TextBlock;
