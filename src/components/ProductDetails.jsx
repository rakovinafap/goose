import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { keyframes } from '@mui/system';

// Анимации
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

const zoomIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const hoverEffect = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

const images = ['/images/detail2.jpg', '/images/detail1.jpg'];
const name = `М’яка іграшка "Гусак-Обіймусь"`;
const features = [
    'Матеріал: гіпоалергенний плюш, холофайбер',
    'Не має дрібних деталей, тому підходить навіть маленьким дітям',
    'Підходить для дітей старше трьох років',
    'Приємний на дотик, можна використовувати як подушку',
    'Відповідність стандарту: ЕАС008/2011',
    'Колір: Білий, Сірий, Жовтий, Коричневий',
];

const ProductDetails = ({onScrollToProductGrid}) => {
    return (
        <Box
            sx={{
                padding: '1rem',
                background: 'linear-gradient(135deg, #ffffff, #f9f9ff)',
                borderRadius: '16px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                maxWidth: '80%',
                margin: '1rem auto',
                animation: `${fadeIn} 1s ease-out`,
            }}
        >
            <Box>
                <Typography
                            variant="h4"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '2rem', md: '1.8rem' },
                                color: '#1976d2',
                                textAlign: 'center',
                                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            {name}
                </Typography>
            </Box>
            <Grid container spacing={4} alignItems="center">
                {/* Блок с изображениями слева */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1rem',
                            animation: `${zoomIn} 0.8s ease`,
                        }}
                    >
                        {images.map((image, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={image}
                                alt={`Product image ${index + 1}`}
                                sx={{
                                    width: '90%',
                                    borderRadius: '18px',
                                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                                    height: '340px',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        animation: `${hoverEffect} 0.3s alternate`,
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Grid>

                {/* Текстовые характеристики справа */}
                <Grid item xs={12} md={6}>
                    

                    <Typography
                        variant="body1"
                        gutterBottom
                        sx={{
                            fontSize: { xs: '12px', md: '18px' },
                            color: '#555',
                            lineHeight: 1.7,
                        }}
                    >
                        М'яка іграшка гусак - це улюбленці багатьох дітей та дорослих. <br />
                        Стане чудовим подарунком на будь-яке свято. <br />
                        Яскраве візуальне оформлення іграшки піднімає настрій та привертає увагу. <br />
                        Розвиває творче мислення та надихає на необмежені ігрові можливості.

                        <Typography><br/></Typography>

                        <CheckCircleIcon color="primary" sx={{ verticalAlign: 'middle' }} /> Ідеальний подарунок, який точно оцінять і запам'ятають надовго <br />
                        <CheckCircleIcon color="primary" sx={{ verticalAlign: 'middle' }} /> М'яке наповнення-антистрес, призначене для релаксу <br />
                        <CheckCircleIcon color="primary" sx={{ verticalAlign: 'middle' }} /> Можна використовувати як іграшку, подушку для сну, підставку, для декору <br />
                    </Typography>

                    <Box sx={{ marginTop: '2rem' }}>
                        <Typography
                            variant="h5"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                color: '#1976d2',
                                textAlign: 'center',
                            }}
                        >
                            Характеристики:
                        </Typography>
                        <Box
                            component="ul"
                            sx={{
                                paddingLeft: '1.2rem',
                                fontSize: { xs: '0.7rem', md: '0.9rem' },
                                color: '#555',
                                listStyle: 'none',
                                '& li': {
                                    marginBottom: '0.3rem',
                                    padding: '0.3rem',
                                    borderRadius: '8px',
                                    transition: 'background-color 0.3s ease',
                                    '&:nth-of-type(odd)': {
                                        backgroundColor: '#f0f8ff',
                                    },
                                    '&:hover': {
                                        backgroundColor: '#d0ebff',
                                    },
                                },
                            }}
                        >
                            {features.map((feature, index) => (
                                <Box component="li" key={index}>
                                    {feature}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={onScrollToProductGrid}
                            sx={{
                                textTransform: 'none',
                                padding: '0.75rem 2rem',
                                fontSize: '1rem',
                                boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)',
                                '&:hover': {
                                    boxShadow: '0 6px 20px rgba(25, 118, 210, 0.5)',
                                    backgroundColor: '#005cbf',
                                },
                            }}
                        >
                            Перейти до каталогу
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ProductDetails;
