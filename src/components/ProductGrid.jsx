import React, { useEffect, useState, forwardRef } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Snackbar, Alert } from '@mui/material';
import { useCart } from '../contexts/CartContext';
import productsData from '../products/products.json'; // Импорт JSON-файла

const ProductGrid = forwardRef((props, ref) => {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    useEffect(() => {
        // Загружаем данные из импортированного JSON
        setProducts(productsData);
    }, []);

    const handleAddToCart = (product) => {
        addToCart(product);
        setSnackbarMessage(`${product.name} добавлен в корзину!`);
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box ref={ref} sx={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            color: '#333',
                            marginBottom: '1.5rem',
                        }}
                    >
                        Наша гусятня
                    </Typography>
                </Grid>

                {products
                    .sort((a, b) => (b.new === a.new ? 0 : b.new ? -1 : 1))
                    .map((product) => {
                        const discountPercentage = product.priceOld
                            ? Math.round(((product.priceOld - product.price) / product.priceOld) * 100)
                            : null;

                        return (
                            <Grid item xs={6} sm={3} md={3} key={product.id}>
                                <Card
                                    sx={{
                                        height: { xs: '360px', sm: '400px', md: '370px' },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position: 'relative',
                                        border: '4px solid #ddd',
                                        borderRadius: '16px',
                                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '8px',
                                            left: '8px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '4px',
                                        }}
                                    >
                                        {product.new && (
                                            <Chip
                                                label="Новинка"
                                                color="success"
                                                size="small"
                                                sx={{ fontWeight: 'bold', opacity: '0.5' }}
                                            />
                                        )}
                                        {product.top && (
                                            <Chip
                                                label="Топ продаж"
                                                color="primary"
                                                size="small"
                                                sx={{ fontWeight: 'bold', opacity: '0.5' }}
                                            />
                                        )}
                                        {discountPercentage && (
                                            <Chip
                                                label={`-${discountPercentage}%`}
                                                color="error"
                                                size="small"
                                                sx={{ fontWeight: 'bold', opacity: '0.5' }}
                                            />
                                        )}
                                    </Box>

                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        alt={product.name}
                                        sx={{
                                            height: { xs: '40%', sm: '45%' },
                                            objectFit: 'contain',
                                            borderTopLeftRadius: '16px',
                                            borderTopRightRadius: '16px',
                                            marginTop: '40px',
                                        }}
                                    />

                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            padding: '0.8rem',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: { xs: '12px', sm: '14px' },
                                                marginBottom: '0.5rem',
                                            }}
                                        >
                                            {product.name}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexDirection: { xs: 'column', sm: 'column', md: 'row' }, // Для ПК в строку, для телефона — столбец
                                            }}
                                            >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                            fontWeight: 'bold',
                                            color: '#60ad6a',
                                            fontSize: { xs: '1rem', sm: '1.2rem' },
                                            marginBottom: { xs: '1px', md: '0' }, // Отступ между элементами для маленьких экранов
                                            }}
                                        >
                                            {product.price} грн
                                        </Typography>
                                        {product.priceOld && (
                                            <Typography
                                            variant="body2"
                                            sx={{
                                                fontWeight: 'bold',
                                                textDecoration: 'line-through',
                                                color: '#888',
                                                fontSize: '0.9rem',
                                                marginLeft: { xs: '0', md: '5px' }, // Добавляем отступ слева для ПК
                                            }}
                                            >
                                            {product.priceOld} грн
                                            </Typography>
                                        )}
                                        </Box>

                                    </CardContent>

                                    <CardActions sx={{ justifyContent: 'center', padding: '0.5rem' }}>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            onClick={() => handleAddToCart(product)}
                                            disabled={!product.available}
                                            sx={{
                                                width: '100%',
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontWeight: 'bold',
                                                padding: '0.4rem 1rem',
                                                borderRadius: '8px',
                                                background: product.available
                                                    ? 'linear-gradient(135deg, #2196f3, #00bcd4)'
                                                    : 'linear-gradient(135deg, #e0e0e0, #bdbdbd)',
                                                color: product.available ? '#fff' : '#757575',
                                                boxShadow: product.available
                                                    ? '0 4px 15px rgba(33, 150, 243, 0.3)'
                                                    : 'none',
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                '&:hover': {
                                                    transform: product.available ? 'scale(1.05)' : 'none',
                                                    boxShadow: product.available
                                                        ? '0 6px 20px rgba(33, 150, 243, 0.4)'
                                                        : 'none',
                                                },
                                                '&:disabled': {
                                                    cursor: 'not-allowed',
                                                    background: 'linear-gradient(135deg, #e0e0e0, #bdbdbd)',
                                                },
                                            }}
                                        >
                                            {product.available ? 'В корзину' : 'Нема :('}
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
            </Grid>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={1000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
});

export default ProductGrid;
