import React, { useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { keyframes } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Анимация появления карточек
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Пути к изображениям
const photos = [
    '/images/banners/goose4-3.jpg',
    '/images/banners/goose4-4.jpg',
    '/images/banners/goose4-2.jpg',
    '/images/banners/goose4-1.jpg',
];

const PhotoGallery = () => {
    // Рефы для кнопок навигации
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <Box
            sx={{
                padding: '3rem',
                background: 'linear-gradient(135deg, #f9f9f9, #e6f7ff)',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Заголовок */}
            <Typography
                variant="h2"
                gutterBottom
                sx={{
                    textAlign: 'center',
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    fontWeight: 'bold',
                    color: '#333',
                    marginBottom: '2rem',
                    animation: `${fadeIn} 1s ease-out`,
                }}
            >
                Наші іграшки
            </Typography>

            {/* Кастомные кнопки */}
            <Box sx={{ position: 'relative' }}>
                <IconButton
                    ref={prevRef}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '-40px',
                        zIndex: 10,
                        transform: 'translateY(-50%)',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        '&:hover': { backgroundColor: '#e6f7ff' },
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>
                <IconButton
                    ref={nextRef}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '-40px',
                        zIndex: 10,
                        transform: 'translateY(-50%)',
                        backgroundColor: '#fff',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        '&:hover': { backgroundColor: '#e6f7ff' },
                    }}
                >
                    <ArrowForwardIcon />
                </IconButton>

                {/* Слайдер */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        600: { slidesPerView: 2 },
                        960: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    style={{
                        paddingBottom: '2rem',
                        margin: '10px'
                    }}
                >
                    {photos.map((photo, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                component="img"
                                src={photo}
                                alt={`Товар ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    borderRadius: '16px',
                                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.15)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                                    },
                                    animation: `${fadeIn} 1s ease-out ${index * 0.2}s`,
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default PhotoGallery;
