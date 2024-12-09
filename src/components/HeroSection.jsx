import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@mui/system';

// Анимация для текста
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

// Анимация для картинки
const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const HeroSection = ({ onScrollToProductGrid }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '2rem',
                background: 'linear-gradient(135deg, #a0e4f2, #f5f5f5)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                margin: '2rem auto',
                maxWidth: '80%',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Декоративные элементы */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '-50px',
                    left: '-50px',
                    width: '150px',
                    height: '150px',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    borderRadius: '50%',
                    filter: 'blur(80px)',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '-50px',
                    right: '-50px',
                    width: '150px',
                    height: '150px',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                }}
            />

            {/* Текстовая часть */}
            <Box
                sx={{
                    textAlign: { xs: 'center', md: 'center' },
                    marginBottom: { xs: '1.5rem', md: '0' },
                    animation: `${fadeIn} 1.2s ease-out`,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    marginLeft: { xs: '0px', md: '60px' }
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 'bold',
                        color: '#333',
                    }}
                >
                    Гусь-обнимусь
                </Typography>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '1rem', md: '1.25rem' },
                        color: '#555',
                        maxWidth: '500px',
                    }}
                >
                    Мы создаём мягкие, уютные и безопасные игрушки, которые подарят вашему ребенку тепло и радость. Наши товары – это больше, чем просто игрушки, это настоящие друзья для ваших близких.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onScrollToProductGrid}
                    sx={{
                        backgroundColor: '#ff6f61',
                        color: '#fff',
                        padding: '0.75rem 2rem',
                        fontSize: '1rem',
                        textTransform: 'none',
                        borderRadius: '8px',
                        marginTop: '0.5rem',
                        boxShadow: '0 4px 15px rgba(255, 111, 97, 0.4)',
                        '&:hover': {
                            backgroundColor: '#ff8b81',
                        },
                    }}
                >
                    Купить сейчас
                </Button>
            </Box>

            {/* Картинка */}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Box
                    component="img"
                    src="/images/goosemain.png"
                    alt="Гусь-обнимусь"
                    sx={{
                        width: '100%',
                        maxWidth: '500px',
                        height: 'auto',
                        borderRadius: '16px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                        objectFit: 'cover',
                        animation: `${float} 3s ease-in-out infinite`,
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;
